module.exports = {
  development: {
    client: 'mysql2',
    connection: {
      host: 'localhost',
      port: 3306,
      user: 'admin_crm',
      password: 'Senha@2580',
      database: 'crmpro',
    },
    useNullAsDefault: true,
    migrations: {
      directory: 'src/controllers/migrations',
    }
  }
}
