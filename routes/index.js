var express = require('express')
var conn = require('../connect')
var router = express.Router()

//GET: Trang chủ
router.get('/', function(req, res) {
    var sql = 'SELECT * FROM banner WHERE SuDung = 1;\
                SELECT * FROM danhmuc ORDER BY MaDanhMuc;\
                SELECT d.DanhMuc, l.* FROM danhmuc d, loaisanpham l\
                WHERE d.MaDanhMuc = l.MaDanhMuc\
                ORDER BY MaDanhMuc'
    conn.query(sql, function(error, results){
        if(error){
            res.send('/error')
        } else {
            res.render('index', {
                title: 'Trang chủ',
                banner: results[0],
                danhmuc: results[1],
                loaisanpham: results[2]
            })
        }
    }) 
})

//GET: Ao
router.get('/ao', function(req, res){
    var sql = 'SELECT * FROM danhmuc ORDER BY MaDanhMuc;\
                SELECT d.DanhMuc, l.* FROM danhmuc d, loaisanpham l\
                WHERE d.MaDanhMuc = l.MaDanhMuc\
                ORDER BY MaDanhMuc;\
                SELECT * FROM sanpham'
    conn.query(sql, function(error, results){
        if(error){
            res.send('/error')
        } else {
            res.render('ao', {
                title: 'Trang chủ',
                danhmuc: results[0],
                loaisanpham: results[1],
                sanpham: results[2]
            })
        }
    }) 
})

module.exports = router