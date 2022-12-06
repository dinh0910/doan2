var express = require('express')
var router = express.Router()
var conn = require('../connect')

var cart_data = {}
var cart = []
var amount = 0
router.post('/', function(req, res){
    cart = req.session.cart
    if(!cart){
        cart = req.session.cart = []
    }
    var id = req.body.MaSanPham
    amount++

    var count = parseInt(req.body.count, 10)
    cart[amount] = cart[amount] || 0

    var ids = Object.keys(cart)
    if(ids.length > 0){
        conn.query('SELECT * FROM danhmuc ORDER BY MaDanhMuc;\
                    SELECT d.DanhMuc, l.* FROM danhmuc d, loaisanpham l\
                    WHERE d.MaDanhMuc = l.MaDanhMuc\
                    ORDER BY MaDanhMuc;\
                    SELECT * FROM sanpham WHERE MaSanPham IN (' + ids + ')', function(err, results){
            if(err){
                res.send('/error')
            } else {
                cart_data = results[2]
                res.render('giohang', {
                    title: 'Giỏ hàng',
                    danhmuc: results[0],
                    loaisanpham: results[1],
                    cart_data: results[2],
                    amount: amount
                })
            }
        })
    } else {
        res.redirect('/error')
    }
})

router.get('/', function(req, res){
    var sql = 'SELECT * FROM danhmuc ORDER BY MaDanhMuc;\
                SELECT d.DanhMuc, l.* FROM danhmuc d, loaisanpham l\
                WHERE d.MaDanhMuc = l.MaDanhMuc\
                ORDER BY MaDanhMuc;'
    conn.query(sql, function(error, results){
        if(error){
            res.send('/error')
        } else {
            res.render('giohang', {
                title: 'Giỏ hàng',
                danhmuc: results[0],
                loaisanpham: results[1],
                cart_data: cart_data,
                amount: amount
            })
        }
    })
})

router.get('/xoa/:id', function(req, res){
    var id = req.params.id
    amount--
    delete cart[amount]
    var ids = Object.keys(cart)
    if(ids.length > 0){
        conn.query('SELECT * FROM danhmuc ORDER BY MaDanhMuc;\
                    SELECT d.DanhMuc, l.* FROM danhmuc d, loaisanpham l\
                    WHERE d.MaDanhMuc = l.MaDanhMuc\
                    ORDER BY MaDanhMuc;\
                    SELECT * FROM sanpham WHERE MaSanPham IN (' + ids + ')', function(err, results){
            if(err){
                res.send('/error')
            } else {
                cart_data = results[2]
                res.render('giohang', {
                    title: 'Giỏ hàng',
                    danhmuc: results[0],
                    loaisanpham: results[1],
                    cart_data: results[2],
                    amount: amount
                })
            }
        })
    } else {
        res.redirect('/error')
    }
})

module.exports = router