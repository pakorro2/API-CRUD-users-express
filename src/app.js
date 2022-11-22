//? Dependencia principal Express
const express = require('express');

//? Routers
const userRouter = require('./users/users.router')

//? Configuracion inicial
const port = 9000;
const app = express();

//? Para manejar JSON 
app.use(express.json());

//? info en url raiz para saber que todo esta OK
app.get('/', (req, res) => {
  res.status(200).json({ message: 'OK' })
});

//? Ruta base
app.use('/', userRouter)

//? Inicializar el servidor
app.listen(port, () => {
  console.log(`Server started at port ${port}`)
})
