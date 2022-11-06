var express = require('express')
var router = express.Router()
var conn = require('../connect')

//GET: Danh sách sản phẩm
router.get('/', function(req, res){
    var sql = 'SELECT p.*, l.LoaiSanPham, s.Size, t.TinhTrang FROM sanpham p, loaisanpham l, size s, tinhtrang t \
                WHERE p.MaLoaiSanPham = l.MaLoaiSanPham AND p.MaSize = s.MaSize AND p.MaTinhTrang = t.MaTinhTrang\
                ORDER BY MaSanPham'
    conn.query(sql, function (error, results) {
        if (error) {
            req.session.error = error
            res.redirect('/admin/error')
        } else {
            res.render('admin/sanpham', {
                title: 'Danh sách sản phẩm',
                sanpham: results
            })
        }
    })
})

// GET: Thêm sản phẩm
router.get('/them', function (req, res) {
    var sql = 'SELECT * FROM loaisanpham ORDER BY MaLoaiSanPham; \
                SELECT * FROM size ORDER BY MaSize; \
                SELECT * FROM tinhtrang ORDER BY MaTinhTrang;'
	conn.query(sql, function(error, results){
		if(error) {
			req.session.error = error;
			res.redirect('/admin/error');
		} else {
			res.render('admin/sanpham_them', {
				title: 'Thêm sản phẩm',
				loaisanpham: results[0],
                size: results[1],
                tinhtrang: results[2]
			})
		}
	})
})

// POST: Thêm sản phẩm
router.post('/them', function (req, res) {
    var sanpham = {
        TenSanPham: req.body.TenSanPham,
        MaLoaiSanPham: req.body.MaLoaiSanPham,
        MaSize: req.body.MaSize,
        DonGia: req.body.DonGia,
        SoLuong: req.body.SoLuong,
        MaTinhTrang: req.body.MaTinhTrang
    }
    var sql = "INSERT INTO sanpham SET ?"
    conn.query(sql, sanpham, function (error, results) {
        if (error) {
            req.session.error = error
            res.redirect('/admin/error')
        } else {
            res.redirect('/admin/sanpham/')
        }
    })
})

// GET: Sửa sản phẩm
router.get('/sua/:id', function (req, res) {
    var id = req.params.id
	var sql = 'SELECT * FROM sanpham WHERE MaSanPham = ?;\
			   SELECT * FROM loaisanpham ORDER BY MaLoaiSanPham; \
               SELECT * FROM size ORDER BY MaSize; \
               SELECT * FROM tinhtrang ORDER BY MaTinhTrang;'            
	conn.query(sql, [id], function(error, results){
		if(error) {
			req.session.error = error
			res.redirect('/admin/error')
		} else {
			res.render('admin/sanpham_sua', {
				title: 'Sửa sản phẩm',
			    sanpham: results[0].shift(),
				loaisanpham: results[1],
                size: results[2],
                tinhtrang: results[3]
			})
		}
	})
})

// POST: Sửa sản phẩm
router.post('/sua/:id', function (req, res) {
    var sanpham = {
        TenSanPham: req.body.TenSanPham,
        MaLoaiSanPham: req.body.MaLoaiSanPham,
        MaSize: req.body.MaSize,
        DonGia: req.body.DonGia,
        SoLuong: req.body.SoLuong,
        DaBan: req.body.DaBan,
        MaTinhTrang: req.body.MaTinhTrang
    }
    var id = req.params.id
    var sql = 'UPDATE sanpham SET ? WHERE MaSanPham = ?'
    conn.query(sql, [sanpham, id], function (error, results) {
        if (error) {
            req.session.error = error
            res.redirect('/admin/error')
        } else {
            res.redirect('/admin/sanpham/')
        }
    })
})

// GET: Duyệt sản phẩm
router.get('/duyet/:id', function(req, res){
	var id = req.params.id;
	var sql = 'UPDATE sanpham SET DaBan = 1 - DaBan WHERE MaSanPham = ?';
	conn.query(sql, [id], function(error, results){
		if(error) {
			req.session.error = error;
			res.redirect('/admin/error');
		} else {
			res.redirect('back');
		}
	});
});

// GET: Xóa sản phẩm
router.get('/xoa/:id', function (req, res) {
    var id = req.params.id
    var sql = 'DELETE FROM sanpham WHERE MaSanPham = ?'
    conn.query(sql, [id], function (error, results) {
        if (error) {
            req.session.error = error
            res.redirect('/admin/error')
        } else {
            res.redirect('/admin/sanpham/')
        }
    })
})

module.exports = router