var mysql = require('mysql');

var conn = mysql.createConnection({
    host: '127.0.0.1',
    port: 3306,
    user: 'root',
    password: '',
    database: 'project2',
    multipleStatements: true
});

module.exports = conn;