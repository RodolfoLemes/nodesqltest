module.exports = {
  development: {
    url: "postgres://postgres:30285843@localhost:5432/nodesqltest",
    dialect: 'postgres',
    operatorAliases: false,
    logging: false,
    define: {
      timestamps: true,
      underscored: true,
      underscoredAll: true
    }
  },
  test: {
    database: 'database',
    dialect: 'sqlite',
    storage: './__tests__/database.sqlite',
    operatorAliases: false,
    logging: false,
    define: {
      timestamps: true,
      underscored: true,
      underscoredAll: true
    }
  },
  production: {
  /* host: process.env.DB_HOST,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME, */
    url: process.env.DB_URL,
    dialect: process.env.DB_DIALECT,
    storage: './__tests__/database.sqlite',
    operatorAliases: false,
    logging: false,
    define: {
      timestamps: true,
      underscored: true,
      underscoredAll: true
    }
  }
}