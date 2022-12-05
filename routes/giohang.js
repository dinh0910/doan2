var express = require('express')
var router = express.Router()
var conn = require('../connect')

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
            })
        }
    }) 
})

//POST: Ao
var cart_data, cart = {}
router.post('/', function(req, res){
    cart = req.session.cart
    if(!cart){
        cart = req.session.cart = {}
    }
    var id = req.body.MaSanPham
    var count = parseInt(req.body.count, 10)

    cart[id] = (cart[id] || 0) + count

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
                res.render('giohang', {
                    title: 'Giỏ hàng',
                    danhmuc: results[0],
                    loaisanpham: results[1],
                    cart_data: results[2],
                    cart: cart
                })
            }
        })
    } else {
        res.redirect('/ao')
    }
})

module.exports = router