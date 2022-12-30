require('dotenv').config()

module.exports = {
  api: {
    port: process.env.PORT,
    host: process.env.HOST,
  },
  db: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    pass: process.env.DB_PASSWORD,
    name: process.env.DB_NAME,
    port: process.env.DB_PORT
  }
}
