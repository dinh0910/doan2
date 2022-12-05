var express = require('express')
var router = express.Router()
var conn = require('../connect')

router.get('/', function(req, res){
    var sql = 'SELECT * FROM danhmuc ORDER BY MaDanhMuc;\
                SELECT d.DanhMuc, l.* FROM danhmuc d, loaisanpham l\
                WHERE d.MaDanhMuc = l.MaDanhMuc\
                ORDER BY MaDanhMuc;\
                SELECT * FROM sanpham'
    conn.query(sql, function(error, results){
        if(error){
            res.send('/error')
        } else {
            res.render('giohang', {
                title: 'Giỏ hàng',
                danhmuc: results[0],
                loaisanpham: results[1],
            })
        }
    }) 
})

module.exports = router