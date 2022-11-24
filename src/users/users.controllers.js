const usersdb = [];
let id = 1;

const Users = require('../models/user.model')

//? Modelo de base datos usuarios
//* {
//* 	id: 1,
//* 	first_name: 'string',
//* 	last_name: 'string',
//* 	email: 'string',
//* 	password: 'string',
//* 	birthday: 'YYYY/MM/DD'
//* }

//? Solo para retornar el array con todos los usuarios
const showAllUsers = async () => {
  const data = await Users.findAll()
  return data
};

//? Obtener solo el usuario con el id incicado
const findUserById = (id) => {
  const filterUsers = usersdb.find((user) => user.id == id)
  return filterUsers
};

const createNewUser = (user) => {

  const newUser = {
    id: id++,
    first_name: user.first_name,
    last_name: user.last_name,
    email: user.email,
    password: user.password,
    birthday: user.birthday,
  }
  usersdb.push(newUser)
  return newUser
};

const deleteUserById = (id) => {
  usersdb.splice(id - 1, 1)
  return usersdb
};


module.exports = {
  showAllUsers,
  findUserById,
  createNewUser,
  deleteUserById
}