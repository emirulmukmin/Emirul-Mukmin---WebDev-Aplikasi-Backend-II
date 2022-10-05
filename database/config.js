const { Client } = require('pg')

const databaseConfig = new Client({
    host: 'localhost',
    user: 'postgres',
    database: 'emirul_backend_2',
    port: 5432,
    password: 'Emirul02!!'
})

module.exports = databaseConfig