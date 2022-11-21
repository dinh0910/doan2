var express = require('express')
var conn = require('../connect')
var router = express.Router()

//GET: Thông tin cá nhân
router.get('/', function (req, res) {
    res.render('thongtincanhan', { title: 'Thông tin cá nhân' })
})

module.exports = router