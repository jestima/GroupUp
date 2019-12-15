var mysql = require('mysql');
var pool = mysql.createPool({
    host: 'remotemysql.com',
    user: 'EFrCxDdGao',
    password: 'MHuCb0rP8s',
    database: 'EFrCxDdGao'
});
exports.pool = pool;