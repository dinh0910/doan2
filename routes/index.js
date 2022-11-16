var express = require('express')
const conn = require('../connect')
var router = express.Router()

//GET: Trang chủ
router.get('/', (req, res) => {
    var sql = 'SELECT * FROM banner WHERE SuDung = 1;'
    conn.query(sql, function(error, results){
        if(error){
            res.send('/error')
        } else {
            res.render('index', {
                title: 'Trang chủ',
                banner: results
            })
        }
    }) 
})

module.exports = router