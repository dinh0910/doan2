var express = require('express')
var router = express.Router()
var conn = require('../connect')

var cart_data={}
var cart = {}
var count = 0
router.post('/', function(req, res){
    cart = req.session.cart
    if(!cart){
        cart = req.session.cart = {}
    }
    var id = req.body.MaSanPham   
    count += parseInt(req.body.count, 10)
    cart[id] = (cart[id] || 0) + parseInt(req.body.count, 10)
    // var text = ''
    // for(let i=0; i<cart.length; i++){
    //     text += cart[i] + ','
    // }
    console.log(cart[id], id)

    var ids = Object.keys(cart)
    for (let i = 0; i<ids.length; i++){
        if(cart[ids[i]] == 0){
            ids[i] = 0
            console.log(cart[ids[i]])
        }
    }
    console.log(ids)
    conn.query('SELECT * FROM danhmuc ORDER BY MaDanhMuc;\
                SELECT d.DanhMuc, l.* FROM danhmuc d, loaisanpham l\
                WHERE d.MaDanhMuc = l.MaDanhMuc\
                ORDER BY MaDanhMuc;\
                SELECT s.*, h.HinhAnh FROM sanpham s, hinhanh h WHERE s.MaSanPham IN (' + ids + ') AND s.MaSanPham = h.MaSanPham', function(err, results){
        if(err){
            res.send('/error')
        } else {
            cart_data = results[2]
            res.render('giohang', {
                title: 'Giỏ hàng',
                danhmuc: results[0],
                loaisanpham: results[1],
                cart_data: results[2],
                amount: count
            })
        }
    })
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
                amount: count
            })
        }
    })
})

router.get('/xoa/:id', function(req, res){
    var id = req.params.id
    delete cart[id]
    console.log('delete: ' + cart)
    var ids = Object.keys(cart)
    console.log(ids)
    conn.query('SELECT * FROM danhmuc ORDER BY MaDanhMuc;\
                SELECT d.DanhMuc, l.* FROM danhmuc d, loaisanpham l\
                WHERE d.MaDanhMuc = l.MaDanhMuc\
                ORDER BY MaDanhMuc;\
                SELECT s.*, h.HinhAnh FROM sanpham s, hinhanh h WHERE s.MaSanPham IN (' + ids + ') AND s.MaSanPham = h.MaSanPham', function(err, results){
        if(err){
            res.send('/error')
        } else {
            count = count - 1
            cart_data = results[2]
            cart = req.session.cart
            console.log(cart[id])
            res.render('giohang', {
                title: 'Giỏ hàng',
                danhmuc: results[0],
                loaisanpham: results[1],
                cart_data: results[2],
                amount: count
            })
        }
    })
})

var stt = 1
router.post('/dathang', function(req, res){
    var dathang = {
        MaTaiKhoan: req.body.MaTaiKhoan,
        TongTien: req.body.TongTien,
    }
    var sql = 'INSERT INTO dondathang SET ?'
    conn.query(sql, dathang, function(error, results){
        if(error){
            res.redirect('/error')
        } else{
            count = 0
            cart = req.session.cart = {}
            res.redirect('/')
        }
    })
})

module.exports = router