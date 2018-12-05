const { Pool, Client } = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'ThiTN',
    password: 'nct',
    port: 5433,
});

module.exports = pool;