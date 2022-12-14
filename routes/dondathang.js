var express = require('express')
var router = express.Router()
var conn = require('../connect')

router.get('/', function (req, res) {
    var sql = 'SELECT d.*, t.TenTaiKhoan, t.DiaChi FROM dondathang d, taikhoan t\
                WHERE d.MaTaiKhoan = t.MaTaiKhoan\
                ORDER BY MaDatHang'
    conn.query(sql, function (error, results) {
        if (error) {
            req.session.error = error
            res.redirect('/admin/error')
        } else {
            res.render('admin/dondathang', {
                title: 'Danh sách đơn đặt hàng',
                dondathang: results
            })
        }
    })
})

router.get('/xoa/:id', function (req, res) {
    var id = req.params.id
    var sql = 'DELETE FROM dondathang WHERE MaDatHang = ?'
    conn.query(sql, [id], function (error, results) {
        if (error) {
            req.session.error = error
            res.redirect('/admin/error')
        } else {
            res.redirect('/admin/dondathang/')
        }
    })
})

module.exports = router