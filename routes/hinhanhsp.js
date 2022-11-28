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

//GET: Danh sách hình ảnh sản phẩm
router.get('/', function (req, res) {
    var sql = 'SELECT h.*, s.TenSanPham FROM hinhanh h, sanpham s \
                WHERE h.MaSanPham = s.MaSanPham\
                ORDER BY MaHinhAnh'
    conn.query(sql, function (error, results) {
        if (error) {
            req.session.error = error
            res.redirect('/admin/error')
        } else {
            res.render('admin/hinhanhsp', {
                title: 'Danh sách hình ảnh sản phẩm',
                hinhanh: results
            })
        }
    })
})

// GET: Thêm hình ảnh sản phẩm
router.get('/them', function (req, res) {
    var sql = "SELECT * FROM sanpham ORDER BY MaSanPham"
    conn.query(sql, function(error, results){
        if(error){
            req.session.error = error
            res.redirect('/admin/error')
        } else {
            res.render('admin/hinhanhsp_them', { 
                title: 'Thêm hình ảnh sản phẩm',
                sanpham: results
            })
        }     
    })
})

// POST: Thêm hình ảnh sản phẩm
router.post('/them', upload.single('HinhAnh'), function (req, res) {
    var fileName = ''
    if(req.file) fileName = req.file.filename
    var hinhanh = {
        MaSanPham: req.body.MaSanPham,
        HinhAnh: fileName
    }
    var sql = "INSERT INTO hinhanh SET ?"
    conn.query(sql, hinhanh, function (error, results) {
        if (error) {
            req.session.error = error
            res.redirect('/admin/error')
        } else {
            res.redirect('/admin/hinhanhsp/')
        }
    })
})

// GET: Sửa hình ảnh sản phẩm
router.get('/sua/:id', function (req, res) {
    var id = req.params.id;
    var sql = 'SELECT * FROM hinhanh WHERE MaHinhAnh = ?;\
                SELECT * FROM sanpham ORDER BY MaSanPham;'
    conn.query(sql, [id], function (error, results) {
        if (error) {
            req.session.error = error
            res.redirect('/admin/error')
        } else {
            res.render('admin/hinhanhsp_sua', {
                title: 'Sửa hình ảnh',
                MaHinhAnh: results[0].MaHinhAnh,
                MaSanPham: results[0].MaSanPham,
                HinhAnh: results[0].HinhAnh
            })
        }
    })
})

// POST: Sửa hình ảnh sản phẩm
router.post('/sua/:id', upload.single('HinhAnh'), function (req, res) {
    var hinhanh = {
        MaSanPham: req.body.MaSanPham,
    }
    if(req.file) banner['HinhAnh'] = req.file.filename
    var id = req.params.id;
    var sql = 'UPDATE hinhanh SET ? WHERE MaHinhAnh = ?'
    conn.query(sql, [banner, id], function (error, results) {
        if (error) {
            req.session.error = error
            res.redirect('/admin/error')
        } else {
            res.redirect('/admin/hinhanhsp/')
        }
    })
})

// GET: Xóa hình ảnh sản phẩm
router.get('/xoa/:id', function (req, res) {
    var id = req.params.id
    var sql = 'DELETE FROM hinhanh WHERE MaHinhAnh = ?'
    conn.query(sql, [id], function (error, results) {
        if (error) {
            req.session.error = error
            res.redirect('/admin/error')
        } else {
            res.redirect('/admin/hinhanhsp/')
        }
    })
})

module.exports = router