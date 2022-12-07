var express = require('express')
var conn = require('../connect')
var router = express.Router()

//GET: Trang chủ
router.get('/', function(req, res) {
    var sql = 'SELECT * FROM banner WHERE SuDung = 1;\
                SELECT * FROM danhmuc ORDER BY MaDanhMuc;\
                SELECT d.DanhMuc, l.* FROM danhmuc d, loaisanpham l\
                WHERE d.MaDanhMuc = l.MaDanhMuc\
                ORDER BY MaDanhMuc;'
    conn.query(sql, function(error, results){
        if(error){
            res.send('/error')
        } else {
            res.render('index', {
                title: 'Trang chủ',
                banner: results[0],
                danhmuc: results[1],
                loaisanpham: results[2],
            })
        }
    }) 
})

// router.get('/giohang', function(req, res){
//     res.render('giohang', {title: 'Giỏ hàng'})
// })

//GET: Sản phẩm
router.get('/sanpham/:category', function(req, res){
    var category = req.params.category
    var sql = "SELECT * FROM danhmuc ORDER BY MaDanhMuc;\
                SELECT d.DanhMuc, l.* FROM danhmuc d, loaisanpham l\
                WHERE d.MaDanhMuc = l.MaDanhMuc\
                ORDER BY MaDanhMuc;\
                SELECT s.*, h.HinhAnh FROM sanpham s, hinhanh h, danhmuc d\
                WHERE s.MaSanPham = h.MaSanPham AND s.MaDanhMuc = d.MaDanhMuc AND d.DanhMucURL = ?"
    conn.query(sql, [category], function(error, results){
        if(error){
            res.send('/error')
        } else {
            res.render('sanpham', {
                title: 'Các sản phẩm',
                danhmuc: results[0],
                loaisanpham: results[1],
                sanpham: results[2]
            })
        }
    }) 
})

//GET: Loại sản phẩm
router.get('/sanpham/:category/:type', function(req, res){
    var type = req.params.type
    var sql = "SELECT * FROM danhmuc ORDER BY MaDanhMuc;\
                SELECT d.DanhMuc, l.* FROM danhmuc d, loaisanpham l\
                WHERE d.MaDanhMuc = l.MaDanhMuc\
                ORDER BY MaDanhMuc;\
                SELECT s.*, h.HinhAnh FROM sanpham s, hinhanh h, loaisanpham l\
                WHERE s.MaSanPham = h.MaSanPham AND s.MaLoaiSanPham = l.MaLoaiSanPham\
                AND l.LoaiSanPhamURL = ?"
    conn.query(sql, [type], function(error, results){
        if(error){
            res.send('/error')
        } else {
            res.render('sanpham', {
                title: 'Các sản phẩm',
                danhmuc: results[0],
                loaisanpham: results[1],
                sanpham: results[2]
            })
        }
    }) 
})

router.post('/timkiem', function(req, res){
    var search = req.body.search
    conn.query("SELECT * FROM danhmuc ORDER BY MaDanhMuc;\
                SELECT d.DanhMuc, l.* FROM danhmuc d, loaisanpham l\
                WHERE d.MaDanhMuc = l.MaDanhMuc\
                ORDER BY MaDanhMuc;\
                SELECT s.*, h.HinhAnh FROM sanpham s, hinhanh h WHERE h.MaSanPham = s.MaSanPham AND s.TenSanPham LIKE '%" + search + "%';", function(error, results){
        if(error){
            res.redirect('/error')
        } else {
            res.render('sanpham', {
                title: 'San pham',
                danhmuc: results[0],
                loaisanpham: results[1],
                sanpham: results[2]
            })
        }
    })
})

module.exports = router