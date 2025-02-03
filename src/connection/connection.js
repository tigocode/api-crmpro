const knex = require('knex')({
  client: 'mysql2',
  connection: {
    host: 'localhost',
    port: 3306,
    user: 'admin_crm',
    password: 'Senha@2580',
    database: 'crmpro',
  },
});

module.exports = knex;
