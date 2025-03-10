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
      directory: 'src/connection/migrations',
    },
    seeds: {
      directory: 'src/connection/seeds', 
    },
  },

  production: {
    client: 'mysql2',
    connection: {
      host: process.env.DB_HOST,
      port: process.env.DB_PORT || 3306,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
    },
    pool: {
      min: 2,
      max: 10, 
    },
    useNullAsDefault: true,
    migrations: {
      directory: 'src/connection/migrations',
    },
    seeds: {
      directory: 'src/connection/seeds',
    },
  }
};
