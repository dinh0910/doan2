var express = require('express')
var router = express.Router()
var conn = require('../connect')
var path = require('path')
var fs = require('fs')
var multer = require('multer')
var storageConfig = multer.diskStorage({
	destination: function(req, file, callback){
		callback(null, 'public/uploads/')
	},
	filename: function(req, file, callback){
		var timestamp = Date.now()
		callback(null, timestamp + path.extname(file.originalname))
	}
})
var upload = multer({ storage: storageConfig })

//GET: Danh sách banner
router.get('/', function (req, res) {
    var sql = 'SELECT * FROM banner ORDER BY MaBanner'
    conn.query(sql, function (error, results) {
        if (error) {
            req.session.error = error
            res.redirect('/admin/error')
        } else {
            res.render('admin/banner', {
                title: 'Danh sách banner',
                banner: results
            })
        }
    })
})

// GET: Thêm banner
router.get('/them', function (req, res) {
    res.render('admin/banner_them', { title: 'Thêm banner' });
});

// POST: Thêm banner
router.post('/them', upload.single('HinhAnh'), function (req, res) {
    var fileName = ''
    if(req.file) fileName = req.file.filename
    var banner = {
        HinhAnh: fileName
    }
    var sql = "INSERT INTO banner SET ?"
    conn.query(sql, banner, function (error, results) {
        if (error) {
            req.session.error = error
            res.redirect('/admin/error')
        } else {
            res.redirect('/admin/banner/')
        }
    })
})

// GET: Sửa banner
router.get('/sua/:id', function (req, res) {
    var id = req.params.id;
    var sql = 'SELECT * FROM banner WHERE MaBanner = ?'
    conn.query(sql, [id], function (error, results) {
        if (error) {
            req.session.error = error
            res.redirect('/admin/error')
        } else {
            res.render('admin/banner_sua', {
                title: 'Sửa banner',
                MaBanner: results[0].MaQuyenHan,
                HinhAnh: results[0].QuyenHan,
                SuDung: results[0].SuDung
            })
        }
    })
})

// POST: Sửa banner
router.post('/sua/:id', upload.single('HinhAnh'), function (req, res) {
    var banner = {
        SuDung: req.body.SuDung
    }
    if(req.file) banner['HinhAnh'] = req.file.filename
    var id = req.params.id;
    var sql = 'UPDATE banner SET ? WHERE MaBanner = ?'
    conn.query(sql, [banner, id], function (error, results) {
        if (error) {
            req.session.error = error
            res.redirect('/admin/error')
        } else {
            res.redirect('/admin/banner/')
        }
    })
})

// GET: Xóa banner
router.get('/xoa/:id', function (req, res) {
    var id = req.params.id
    var sql = 'DELETE FROM banner WHERE MaBanner = ?'
    conn.query(sql, [id], function (error, results) {
        if (error) {
            req.session.error = error
            res.redirect('/admin/error')
        } else {
            res.redirect('/admin/banner/')
        }
    })
})

module.exports = router