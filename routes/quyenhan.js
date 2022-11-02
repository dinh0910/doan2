var express = require('express')
var router = express.Router()
var conn = require('../connect')

//GET: Danh sách quyền hạn
router.get('/', function (req, res) {
    var sql = 'SELECT * FROM quyenhan ORDER BY MaQuyenHan'
    conn.query(sql, function (error, results) {
        if (error) {
            req.session.error = error
            res.redirect('admin/error')
        } else {
            res.render('admin/quyenhan', {
                title: 'Danh sách quyền hạn',
                quyenhan: results
            })
        }
    })
})

// GET: Thêm quyền hạn
router.get('/them', function (req, res) {
    res.render('admin/quyenhan_them', { title: 'Thêm quyền hạn' });
});

// POST: Thêm quyền hạn
router.post('/them', function (req, res) {
    var quyenhan = {
        QuyenHan: req.body.QuyenHan
    }
    var sql = "INSERT INTO quyenhan SET ?"
    conn.query(sql, quyenhan, function (error, results) {
        if (error) {
            req.session.error = error
            res.redirect('admin/error')
        } else {
            res.redirect('/admin/quyenhan/')
        }
    })
})

// GET: Sửa quyền hạn
router.get('/sua/:id', function (req, res) {
    var id = req.params.id;
    var sql = 'SELECT * FROM quyenhan WHERE MaQuyenHan = ?'
    conn.query(sql, [id], function (error, results) {
        if (error) {
            req.session.error = error
            res.redirect('admin/error')
        } else {
            res.render('admin/quyenhan_sua', {
                title: 'Sửa quyền hạn',
                MaQuyenHan: results[0].MaQuyenHan,
                QuyenHan: results[0].QuyenHan
            })
        }
    })
})

// POST: Sửa quyền hạn
router.post('/sua/:id', function (req, res) {
    var quyenhan = {
        QuyenHan: req.body.QuyenHan
    }
    var id = req.params.id;
    var sql = 'UPDATE quyenhan SET ? WHERE MaQuyenHan = ?'
    conn.query(sql, [quyenhan, id], function (error, results) {
        if (error) {
            req.session.error = error
            res.redirect('admin/error')
        } else {
            res.redirect('/admin/quyenhan/')
        }
    })
})

// GET: Xóa chủ đề
router.get('/xoa/:id', function (req, res) {
    var id = req.params.id
    var sql = 'DELETE FROM quyenhan WHERE MaQuyenHan = ?'
    conn.query(sql, [id], function (error, results) {
        if (error) {
            req.session.error = error
            res.redirect('admin/error')
        } else {
            res.redirect('/admin/quyenhan/')
        }
    })
})

module.exports = router