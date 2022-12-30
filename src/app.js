//? Dependencia principal Express
const express = require('express');
const cors = require('cors')

//? Database config
const db = require('./utils/database')
const config = require('../config')

//? Routers
const userRouter = require('./users/users.router')

//? Configuracion inicial
const port = 9000;
const app = express();

//? Para manejar JSON 
app.use(express.json());
//? Enable CORS
app.use(cors())

//?Conection and configuration database validated
db.authenticate()
  .then(() => console.log('Base de datos autenticada correctamente'))
  .catch((err) => console.log(err))

db.sync()
  .then(() => console.log('Base de datos sincronizada correctamente'))
  .catch((err) => console.log(err))

//? info en url raiz para saber que todo esta OK
app.get('/', (req, res) => {
  res.status(200).json({ message: 'OK' })
});

//? Ruta base
app.use('/users', userRouter)

//? Inicializar el servidor
app.listen(config.api.port, () => {
  console.log(`Server started on ${config.api.host}`)
})
