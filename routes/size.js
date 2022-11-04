var express = require('express')
var router = express.Router()
var conn = require('../connect')

//GET: Danh sách size
router.get('/', function (req, res) {
    var sql = 'SELECT * FROM size ORDER BY MaSize'
    conn.query(sql, function (error, results) {
        if (error) {
            req.session.error = error
            res.redirect('/admin/error')
        } else {
            res.render('admin/size', {
                title: 'Danh sách size',
                size: results
            })
        }
    })
})

// GET: Thêm size
router.get('/them', function (req, res) {
    res.render('admin/size_them', { title: 'Thêm size' });
});

// POST: Thêm size
router.post('/them', function (req, res) {
    var size = {
        Size: req.body.Size
    }
    var sql = "INSERT INTO size SET ?"
    conn.query(sql, size, function (error, results) {
        if (error) {
            req.session.error = error
            res.redirect('admin/error')
        } else {
            res.redirect('/admin/size/')
        }
    })
})

// GET: Sửa size
router.get('/sua/:id', function (req, res) {
    var id = req.params.id;
    var sql = 'SELECT * FROM size WHERE MaSize = ?'
    conn.query(sql, [id], function (error, results) {
        if (error) {
            req.session.error = error
            res.redirect('/admin/error')
        } else {
            res.render('admin/size_sua', {
                title: 'Sửa size',
                MaSize: results[0].MaSize,
                Size: results[0].Size
            })
        }
    })
})

// POST: Sửa size
router.post('/sua/:id', function (req, res) {
    var size = {
        Size: req.body.Size
    }
    var id = req.params.id;
    var sql = 'UPDATE size SET ? WHERE MaSize = ?'
    conn.query(sql, [size, id], function (error, results) {
        if (error) {
            req.session.error = error
            res.redirect('/admin/error')
        } else {
            res.redirect('/admin/size/')
        }
    })
})

// GET: Xóa size
router.get('/xoa/:id', function (req, res) {
    var id = req.params.id
    var sql = 'DELETE FROM size WHERE MaSize = ?'
    conn.query(sql, [id], function (error, results) {
        if (error) {
            req.session.error = error
            res.redirect('/admin/error')
        } else {
            res.redirect('/admin/size/')
        }
    })
})

module.exports = router