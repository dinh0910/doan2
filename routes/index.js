var express = require('express')
var conn = require('../connect')
var router = express.Router()

//GET: Trang chủ
router.get('/', function(req, res) {
    var sql = 'SELECT * FROM banner WHERE SuDung = 1;\
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
                danhmuc: results[1]
            })
        }
    }) 
})

module.exports = router