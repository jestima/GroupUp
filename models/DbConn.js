var mysql = require('mysql');
require('dotenv').config()

var pool = mysql.createPool({
    host: 'remotemysql.com',
    user: 'EFrCxDdGao',
    password: process.env.DB_PASS,
    database: 'EFrCxDdGao'
});
exports.pool = pool;