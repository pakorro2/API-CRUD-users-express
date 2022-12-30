const uuid = require('sequelize');
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
const findUserById = async (id) => {
  const data = await Users.findOne({
    where: {
      id: id
    }
  })
  return data
};

const createNewUser = async (user) => {

  const data = await Users.create({
    id: uuid.v4(),
    first_name: user.first_name,
    last_name: user.last_name,
    email: user.email,
    password: user.password,
    birthday: user.birthday,
  })
  return data
};
const updateUser = async (id, obj) => {
  const data = await Users.update(obj, {
    where: {
      id: id
    }
  })
  return data[0]
}

const deleteUser = async (id) => {
  const data = await Users.destroy({
    where: {
      id: id
    }
  })
  return data
}


module.exports = {
  showAllUsers,
  findUserById,
  createNewUser,
  updateUser,
  deleteUser
}