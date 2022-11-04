var express = require('express')
var router = express.Router()
var conn = require('../connect')

router.get('/', function(req, res){
    var sql = 'SELECT * FROM sanpham ORDER BY MaSanPham'
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

module.exports = router