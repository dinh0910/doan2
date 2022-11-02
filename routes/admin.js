var express = require('express')
var router = express.Router();

//GET: Trang chủ
router.get('/', function (req, res) {
    res.render('admin/index', { title: 'Admin Page' })
})

module.exports = router