var express = require('express')
var conn = require('../connect')
var router = express.Router()

//GET: Thông tin cá nhân
router.get('/', function (req, res) {
    if(req.session.MaTaiKhoan){
        var sql = 'SELECT * FROM taikhoan WHERE MaTaiKhoan = ?'
        conn.query(sql, req.session.MaTaiKhoan, function (error, results) {
            if (error) {
                req.session.error = error
                res.redirect('/error')
            } else {
                res.render('thongtincanhan', {
                    title: 'Thông tin cá nhân',
                    taikhoan: results[0]
                })
            }
        })
    } else {
        res.redirect('/dangnhap')
    }
})

router.post('/capnhat/:id', function(req,res){
    if(req.session.MaTaiKhoan){
        var id = req.params.id
        var sql = 'SELECT * FROM taikhoan WHERE MaTaiKhoan = ?'
        conn.query(sql, [id], function(error, results){
            if(error){
                res.redirect('/error')
            } else {
                res.redirect('/thongtincanhan/')
            }
        })
    }
})

module.exports = router