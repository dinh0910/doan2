var express = require('express');
var router = express.Router();
var path = require('path');
var fs = require("fs");
var conn = require('../connect');
var { check, validationResult } = require('express-validator');
var bcrypt = require('bcrypt');
var saltRounds = 10;
var multer = require('multer');
var storageConfig = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, 'uploads/');
    },
    filename: function (req, file, callback) {
        var timestamp = Date.now();
        callback(null, timestamp + path.extname(file.originalname));
    }
});
var upload = multer({ storage: storageConfig });

// GET: Đăng nhập
router.get('/dangnhap', function (req, res) {
    res.render('dangnhap', { title: 'Đăng nhập' });
});

module.exports = router