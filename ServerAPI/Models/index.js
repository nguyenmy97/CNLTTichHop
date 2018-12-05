const { Pool, Client } = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'ThiTN',
    password: '1997',
    port: 5432,
});

module.exports = pool;