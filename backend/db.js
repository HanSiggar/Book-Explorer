
const mysql = require('mysql2');
require('dotenv').config();

const conn = mysql.createPool({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || 'Hansika@1978',
  database: process.env.DB_NAME || 'book_explorer',
  waitForConnections: true,
  connectionLimit: 10,   // how many connections at once
  queueLimit: 0          // unlimited queued requests
});

module.exports = conn;
