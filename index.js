var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var session = require('express-session');

var adminIndexRouter = require('./routes/admin')
var indexRouter = require('./routes/index')
var authRouter = require('./routes/auth')
var taiKhoanRouter = require('./routes/taikhoan')
var quyenHanRouter = require('./routes/quyenhan')
var bannerRourter = require('./routes/banner')
var sizeRouter = require('./routes/size')
var danhmucRouter = require('./routes/danhmuc')
var loaisanphamRouter = require('./routes/loaisanpham')
var sanphamRouter = require('./routes/sanpham')
var hinhanhSPRouter = require('./routes/hinhanhsp')
var tinhtrangRouter = require('./routes/tinhtrang')
var thongtincanhanRouter = require('./routes/thongtincanhan')
var giohangRouter = require('./routes/giohang')
// var aoRouter = require('./routes/ao')

app.set('views', './views')
app.set('view engine', 'ejs')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static('public'))

app.use(session({
    name: 'Secondhand Store',
    secret: 'I dunt know',
    resave: true,
    saveUninitialized: true,
    cookie: {
        maxAge: 30 * 86400000
    }
}));

app.use(function (req, res, next) {
    res.locals.session = req.session;

    var error = req.session.error;
    var success = req.session.success;

    delete req.session.error;
    delete req.session.success;

    res.locals.errorMsg = '';
    res.locals.successMsg = '';

    if (error) res.locals.errorMsg = error;
    if (success) res.locals.successMsg = success;

    next();
});

app.use('/admin', adminIndexRouter)
app.use('/', indexRouter)
app.use('/', authRouter)
app.use('/admin/taikhoan', taiKhoanRouter)
app.use('/admin/quyenhan', quyenHanRouter)
app.use('/admin/banner', bannerRourter)
app.use('/admin/size', sizeRouter)
app.use('/admin/danhmuc', danhmucRouter)
app.use('/admin/loaisanpham', loaisanphamRouter)
app.use('/admin/sanpham', sanphamRouter)
app.use('/admin/hinhanhsp', hinhanhSPRouter)
app.use('/admin/tinhtrang', tinhtrangRouter)
app.use('/thongtincanhan', thongtincanhanRouter)
app.use('/giohang', giohangRouter)
// app.use('/ao', aoRouter)

app.listen(3000, function () {
    console.log('Server is running! => http://127.0.0.1:3000 :3')
    console.log('Server admin is running! => http://127.0.0.1:3000/admin :)')
});