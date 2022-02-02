// Update with your config settings.
const Dotenv = require('dotenv');
Dotenv.config({ path: `${__dirname}/.env` });
console.log(process.env.DB_DATA, "hello DB host\n ");

module.exports = {

    development: {
        client: 'mysql',
        connection: {
            database: process.env.DB_DATA,
            user: process.env.USER_DATA,
            password: process.env.PASS
        }
    },

    staging: {
        client: 'mysql',
        connection: {
            database: process.env.DB_DATA,
            user: process.env.USER_DATA,
            password: process.env.PASS
        },
        pool: {
            min: 2,
            max: 10
        },
        migrations: {
            tableName: 'knex_migrations',
            directory: "./migrations"
        }
    },

    production: {
        client: 'mysql',
        connection: {
            database: 'my_db',
            user: 'username',
            password: 'password'
        },
        pool: {
            min: 2,
            max: 10
        },
        migrations: {
            tableName: 'knex_migrations',
            directory: './migrations'
        }
    }

};