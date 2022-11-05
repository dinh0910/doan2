var express = require('express')
var router = express.Router()
var conn = require('../connect')

//GET: Danh sách tình trạng
router.get('/', function (req, res) {
    var sql = 'SELECT * FROM tinhtrang ORDER BY MaTinhTrang'
    conn.query(sql, function (error, results) {
        if (error) {
            req.session.error = error
            res.redirect('/admin/error')
        } else {
            res.render('admin/tinhtrang', {
                title: 'Danh sách tình trạng',
                tinhtrang: results
            })
        }
    })
})

// GET: Thêm tình trạng
router.get('/them', function (req, res) {
    res.render('admin/tinhtrang_them', { title: 'Thêm tình trạng' });
});

// POST: Thêm tình trạng
router.post('/them', function (req, res) {
    var tinhtrang = {
        TinhTrang: req.body.TinhTrang
    }
    var sql = "INSERT INTO tinhtrang SET ?"
    conn.query(sql, tinhtrang, function (error, results) {
        if (error) {
            req.session.error = error
            res.redirect('/admin/error')
        } else {
            res.redirect('/admin/tinhtrang/')
        }
    })
})

// GET: Sửa tình trạng
router.get('/sua/:id', function (req, res) {
    var id = req.params.id;
    var sql = 'SELECT * FROM tinhtrang WHERE MaTinhTrang = ?'
    conn.query(sql, [id], function (error, results) {
        if (error) {
            req.session.error = error
            res.redirect('/admin/error')
        } else {
            res.render('admin/tinhtrang_sua', {
                title: 'Sửa tình trạng',
                MaTinhTrang: results[0].MaTinhTrang,
                TinhTrang: results[0].TinhTrang
            })
        }
    })
})

// POST: Sửa tình trạng
router.post('/sua/:id', function (req, res) {
    var tinhtrang = {
        TinhTrang: req.body.TinhTrang
    }
    var id = req.params.id;
    var sql = 'UPDATE tinhtrang SET ? WHERE MaTinhTrang = ?'
    conn.query(sql, [tinhtrang, id], function (error, results) {
        if (error) {
            req.session.error = error
            res.redirect('/admin/error')
        } else {
            res.redirect('/admin/tinhtrang/')
        }
    })
})

// GET: Xóa tình trạng
router.get('/xoa/:id', function (req, res) {
    var id = req.params.id
    var sql = 'DELETE FROM tinhtrang WHERE MaTinhTrang = ?'
    conn.query(sql, [id], function (error, results) {
        if (error) {
            req.session.error = error
            res.redirect('/admin/error')
        } else {
            res.redirect('/admin/tinhtrang/')
        }
    })
})

module.exports = router