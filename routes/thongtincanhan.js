var express = require('express')
var conn = require('../connect')
var router = express.Router()

//GET: Thông tin cá nhân
router.get('/', function (req, res) {
    if(req.session.MaTaiKhoan){
        var id = req.session.MaTaiKhoan
        var sql = 'SELECT * FROM danhmuc ORDER BY MaDanhMuc;\
                    SELECT d.DanhMuc, l.* FROM danhmuc d, loaisanpham l\
                    WHERE d.MaDanhMuc = l.MaDanhMuc\
                    ORDER BY MaDanhMuc;\
                    SELECT * FROM taikhoan WHERE MaTaiKhoan = ?'
        conn.query(sql, id, function (error, results) {
            if (error) {
                req.session.error = error
                res.redirect('/error')
            } else {
                res.render('thongtincanhan', {
                    title: 'Thông tin cá nhân',
                    danhmuc: results[0],
                    loaisanpham: results[1],
                    taikhoan: results[2].shift()
                })
            }
        })
    } else {
        res.redirect('/dangnhap')
    }
})

router.post('/capnhat/:id', function(req,res){
    var id = req.params.id
    var taikhoan = {
        HoTen: req.body.HoTen,
        DiaChi: req.body.DiaChi,
        SoDienThoai: req.body.SoDienThoai,
        Email: req.body.Email
    }
    var sql = 'UPDATE taikhoan SET ? WHERE MaTaiKhoan = ?'
    conn.query(sql, [taikhoan, id], function(error, results){
        if(error){
            res.redirect('/error')
        } else {
            res.redirect('/thongtincanhan')
        }
    })
})

module.exports = router