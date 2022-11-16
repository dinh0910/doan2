var express = require('express')
var router = express.Router()
var conn = require('../connect')

//GET: Danh sách loại sản phẩm
router.get('/', function (req, res) {
    var sql = 'SELECT l.*, d.DanhMuc FROM loaisanpham l, danhmuc d \
                WHERE l.MaDanhMuc = d.MaDanhMuc\
                ORDER BY MaLoaiSanPham'
    conn.query(sql, function (error, results) {
        if (error) {
            req.session.error = error
            res.redirect('/admin/error')
        } else {
            res.render('admin/loaisanpham', {
                title: 'Danh sách loại sản phẩm',
                loaisanpham: results
            })
        }
    })
})

// GET: Thêm loại sản phẩm
router.get('/them', function (req, res) {
    var sql = 'SELECT * FROM danhmuc ORDER BY DanhMuc';
	conn.query(sql, function(error, results){
		if(error) {
			req.session.error = error
			res.redirect('/admin/error')
		} else {
			res.render('admin/loaisanpham_them', {
				title: 'Thêm loại sản phẩm',
				danhmuc: results
			})
		}
	})
})

// POST: Thêm loại sản phẩm
router.post('/them', function (req, res) {
    var loaisanpham = {
        MaDanhMuc: req.body.MaDanhMuc,
        LoaiSanPham: req.body.LoaiSanPham
    }
    var sql = "INSERT INTO loaisanpham SET ?"
    conn.query(sql, loaisanpham, function (error, results) {
        if (error) {
            req.session.error = error
            res.redirect('/admin/error')
        } else {
            res.redirect('/admin/loaisanpham/')
        }
    })
})

// GET: Sửa loại sản phẩm
router.get('/sua/:id', function (req, res) {
    var id = req.params.id
	var sql = 'SELECT * FROM loaisanpham WHERE MaLoaiSanPham = ?;\
			   SELECT * FROM danhmuc ORDER BY DanhMuc'
	conn.query(sql, [id], function(error, results){
		if(error) {
			req.session.error = error
			res.redirect('/admin/error')
		} else {
			res.render('admin/loaisanpham_sua', {
				title: 'Sửa loại sản phẩm',
			    loaisanpham: results[0].shift(),
				danhmuc: results[1]
			})
		}
	})
})

// POST: Sửa loại sản phẩm
router.post('/sua/:id', function (req, res) {
    var loaisanpham = {
        MaDanhMuc: req.body.MaDanhMuc,
        LoaiSanPham: req.body.LoaiSanPham
    }
    var id = req.params.id
    var sql = 'UPDATE loaisanpham SET ? WHERE MaLoaiSanPham = ?'
    conn.query(sql, [loaisanpham, id], function (error, results) {
        if (error) {
            req.session.error = error
            res.redirect('/admin/error')
        } else {
            res.redirect('/admin/loaisanpham/')
        }
    })
})

// GET: Xóa loại sản phẩm
router.get('/xoa/:id', function (req, res) {
    var id = req.params.id
    var sql = 'DELETE FROM loaisanpham WHERE MaLoaiSanPham = ?'
    conn.query(sql, [id], function (error, results) {
        if (error) {
            req.session.error = error
            res.redirect('/admin/error')
        } else {
            res.redirect('/admin/loaisanpham/')
        }
    })
})

module.exports = router