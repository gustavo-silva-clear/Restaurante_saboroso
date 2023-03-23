const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '@Root123',
    database: 'restaurante_saboroso',
    multipleStatements: true
});

module.exports = connection;