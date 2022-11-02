var express = require('express')
var router = express.Router()
var conn = require('../connect')
var bcrypt = require('bcrypt')
var saltRounds = 10

//GET: Danh sách tài khoản
router.get('/', function (req, res) {
    var sql = 'SELECT * FROM taikhoan ORDER BY MaTaiKhoan'
    conn.query(sql, function (error, results) {
        if (error) {
            req.session.error = error
            res.redirect('admin/error')
        } else {
            res.render('admin/taikhoan', {
                title: 'Danh sách tài khoản',
                taikhoan: results
            })
        }
    })
})

// GET: Thêm tài khoản
router.get('/them', function (req, res) {
    res.render('admin/taikhoan_them', { title: 'Thêm tài khoản mới' });
})

// POST: Thêm tài khoản
router.post('/them', function (req, res) {
    var taikhoan = {
        TenTaiKhoan: req.body.TenTaiKhoan,
        MatKhau: bcrypt.hashSync(req.body.XacNhanMatKhau, saltRounds),
        HoTen: req.body.HoTen,
        DiaChi: req.body.DiaChi,
        SoDienThoai: req.body.SoDienThoai,
        Email: req.body.Email,
    }
    var sql = "INSERT INTO taikhoan SET ?"
    conn.query(sql, taikhoan, function (error, results) {
        if (error) {
            req.session.error = error
            res.redirect('/admin/error')
        } else {
            res.redirect('/admin/taikhoan/')
        }
    })
})

// GET: Sửa tài khoản
router.get('/sua/:id', function (req, res) {
    var id = req.params.id;
    var sql = 'SELECT * FROM taikhoan WHERE MaTaiKhoan = ?'
    conn.query(sql, [id], function (error, results) {
        if (error) {
            req.session.error = error
            res.redirect('/admin/error')
        } else {
            res.render('admin/taikhoan_sua', {
                title: 'Sửa tài khoản',
                MaTaiKhoan: results[0].MaTaiKhoan,
                TenTaiKhoan: results[0].TenTaiKhoan,
                MatKhau: results[0].MatKhau,
                HoTen: results[0].HoTen,
                DiaChi: results[0].DiaChi,
                SoDienThoai: results[0].SoDienThoai,
                Email: results[0].Email,
                MaQuyenHan: results[0].MaQuyenHan,
                TinhTrang: results[0].TinhTrang
            })
        }
    })
})

// POST: Sửa tài khoản
router.post('/sua/:id', function (req, res) {
    var taikhoan = {
        TenTaiKhoan: req.body.TenTaiKhoan,
        HoTen: req.body.HoTen,
        DiaChi: req.body.DiaChi,
        SoDienThoai: req.body.SoDienThoai,
        Email: req.body.Email,
        MaQuyenHan: req.body.MaQuyenHan,
        TinhTrang: req.body.TinhTrang
    }
    if(req.body.MatKhau)
        taikhoan['MatKhau'] = bcrypt.hashSync(req.body.MatKhau, saltRounds)
    var id = req.params.id
    var sql = 'UPDATE taikhoan SET ? WHERE MaTaiKhoan = ?'
    conn.query(sql, [taikhoan, id], function (error, results) {
        if (error) {
            req.session.error = error
            res.redirect('/admin/error')
        } else {
            res.redirect('/admin/taikhoan/')
        }
    })
})

// GET: Xóa chủ đề
router.get('/xoa/:id', function (req, res) {
    var id = req.params.id
    var sql = 'DELETE FROM taikhoan WHERE MaTaiKhoan = ?'
    conn.query(sql, [id], function (error, results) {
        if (error) {
            req.session.error = error
            res.redirect('admin/error')
        } else {
            res.redirect('/admin/taikhoan/')
        }
    })
})

module.exports = router