var express = require('express')
var router = express.Router()
var conn = require('../connect')
var path = require('path')
var fs = require('fs')
var multer = require('multer')
var storageConfig = multer.diskStorage({
	destination: function(req, file, callback){
		callback(null, 'public/uploads/category/')
	},
	filename: function(req, file, callback){
		var timestamp = Date.now()
		callback(null, timestamp + path.extname(file.originalname))
	}
})
var upload = multer({ storage: storageConfig })

//GET: Danh sách danh mục
router.get('/', function (req, res) {
    var sql = 'SELECT * FROM danhmuc ORDER BY MaDanhMuc'
    conn.query(sql, function (error, results) {
        if (error) {
            req.session.error = error
            res.redirect('/admin/error')
        } else {
            res.render('admin/danhmuc', {
                title: 'Danh sách danh mục',
                danhmuc: results
            })
        }
    })
})

// GET: Thêm danh mục
router.get('/them', function (req, res) {
    res.render('admin/danhmuc_them', { title: 'Thêm danh mục' });
});

// POST: Thêm danh mục
router.post('/them', upload.single('HinhAnh'), function (req, res) {
    var fileName = ''
    if(req.file) fileName = req.file.filename
    var danhmuc = {
        DanhMuc: req.body.DanhMuc,
        DanhMucURL: req.body.DanhMucURL,
        HinhAnh: fileName
    }
    var sql = "INSERT INTO danhmuc SET ?"
    conn.query(sql, danhmuc, function (error, results) {
        if (error) {
            req.session.error = error
            res.redirect('/admin/error')
        } else {
            res.redirect('/admin/danhmuc/')
        }
    })
})

// GET: Sửa danh mục
router.get('/sua/:id', function (req, res) {
    var id = req.params.id;
    var sql = 'SELECT * FROM danhmuc WHERE MaDanhMuc = ?'
    conn.query(sql, [id], function (error, results) {
        if (error) {
            req.session.error = error
            res.redirect('/admin/error')
        } else {
            res.render('admin/danhmuc_sua', {
                title: 'Sửa danh mục',
                MaDanhMuc: results[0].MaDanhMuc,
                DanhMuc: results[0].DanhMuc,
                DanhMucURL: results[0].DanhMucURL,
                HinhAnh: results[0].HinhAnh
            })
        }
    })
})

// POST: Sửa danh mục
router.post('/sua/:id', upload.single('HinhAnh'), function (req, res) {
    var danhmuc = {
        DanhMuc: req.body.DanhMuc,
        DanhMucURL: req.body.DanhMucURL
    }
    if(req.file) danhmuc['HinhAnh'] = req.file.filename
    var id = req.params.id;
    var sql = 'UPDATE danhmuc SET ? WHERE MaDanhMuc = ?'
    conn.query(sql, [danhmuc, id], function (error, results) {
        if (error) {
            req.session.error = error
            res.redirect('/admin/error')
        } else {
            res.redirect('/admin/danhmuc/')
        }
    })
})

// GET: Xóa danh mục
router.get('/xoa/:id', function (req, res) {
    var id = req.params.id
    var sql = 'DELETE FROM danhmuc WHERE MaDanhMuc = ?'
    conn.query(sql, [id], function (error, results) {
        if (error) {
            req.session.error = error
            res.redirect('/admin/error')
        } else {
            res.redirect('/admin/danhmuc/')
        }
    })
})

module.exports = router