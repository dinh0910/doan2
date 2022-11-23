var express = require('express')
var router = express.Router()
var path = require('path')
var fs = require("fs")
var conn = require('../connect')
var { check, validationResult } = require('express-validator')
var bcrypt = require('bcrypt')
var saltRounds = 10
var multer = require('multer')

// GET: Đăng nhập
router.get('/dangnhap', function (req, res) {
    res.render('dangnhap', { title: 'Đăng nhập' })
})

// POST: Đăng nhập
router.post('/dangnhap', function(req, res){
	if(req.session.MaTaiKhoan){
		req.session.error = 'Người dùng đã đăng nhập rồi.'
		res.redirect('/error')
	} else {
		var sql = "SELECT * FROM taikhoan WHERE TenTaiKhoan = ?"
		conn.query(sql, [req.body.TenTaiKhoan], function(error, results){
			if(error) {
				req.session.error = error
				res.redirect('/error')
			} else if(results.length > 0){
				var tk = results[0]
				if(bcrypt.compareSync(req.body.MatKhau, tk.MatKhau)){
					if(tk.TinhTrang == 0){
						req.session.error = 'Người dùng đã bị khóa tài khoản.'
						res.redirect('/error')
					} else {
						// Đăng ký session
						req.session.MaTaiKhoan = tk.MaTaiKhoan
						req.session.TenTaiKhoan = tk.TenTaiKhoan
						req.session.HoTen = tk.HoTen
						req.session.MaQuyenHan = tk.MaQuyenHan
						if(req.session.MaQuyenHan == 3)
							res.redirect('/')
						else
							res.redirect('/admin/index')
					}
				} else {
					req.session.error = 'Mật khẩu không đúng.'
					res.redirect('/error')
				}
			} else {
				req.session.error = 'Tên đăng nhập không tồn tại.'
				res.redirect('/error')
			}
		})
	}
})

// GET: Đăng ký
router.get('/dangky', function (req, res) {
    res.render('dangky', { title: 'Đăng ký tài khoản' })
})

//POST: Đăng ký
router.post('/dangky', function(req, res){
	var errors = validationResult(req)
	if(!errors.isEmpty()) {
		if(req.file) fs.unlink(req.file.path, function(err){});
		res.render('dangky', {
			title: 'Đăng ký tài khoản',
			errors: errors.array()
		})
	} else {
		var fileName = ''
		if(req.file) fileName = req.file.filename
		var data = {
			TenTaiKhoan: req.body.TenTaiKhoan,
			MatKhau: bcrypt.hashSync(req.body.XacNhanMatKhau, saltRounds)
		}
		var sql = 'INSERT INTO taikhoan SET ?'
		conn.query(sql, data, function(error, results){
			if(error) {
				req.session.error = error
				res.redirect('/error')
			} else {
				req.session.success = 'Đã đăng ký tài khoản thành công.'
				res.redirect('/success')
			}
		})
	}
})

// GET: Đăng xuất
router.get('/dangxuat', function(req, res){
	if(req.session.MaTaiKhoan){
		delete req.session.MaTaiKhoan
		delete req.session.TenTaiKhoan
		delete req.session.HoTen
		delete req.session.MaQuyenHan
		
		res.redirect('/')
	} else {
		req.session.error = 'Người dùng chưa đăng nhập.'
		res.redirect('/error')
	}
})

module.exports = router