var express = require('express')
var router = express.Router()

router.get('/', (req, res) => {
    res.render('site/index', {title: 'Trang chủ'})
})

module.exports = router