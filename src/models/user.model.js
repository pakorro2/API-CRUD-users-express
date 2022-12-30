//?Dependencia
const { DataTypes } = require('sequelize')

//?LLamamos la base de datos
const db = require('../utils/database')

//?Examble JS Model
//* {
//*   id: 1,
//*   first_name: 'string',
//*   last_name: 'string',
//*   email: 'string',
//*   password: 'string',
//*   birthday: 'YYYY/MM/DD'
//* }

const Users = db.define('users', {
  id: {
    type: DataTypes.UUID,
    primaryKey: true
  },
  first_name: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      len: [2, 50]
    }
  },
  last_name: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      len: [2, 50]
    }
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isEmail: true
    },
    unique: true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  birthday: {
    type: DataTypes.DATEONLY,
    allowNull: false
  }
},)

module.exports = Users
