const userControllers = require('./users.controllers');

const getAllUsers = (req, res) => {
  userControllers.showAllUsers()
    .then((data) => {
      res.status(200).json(data)
    })
    .catch((err) => {
      res.status(400).json({
        message: err.message
      })
    })
};

const getUserById = (req, res) => {
  const id = req.params.id
  userControllers.findUserById(id)
    .then((data) => {
      if (data) {
        res.status(200).json(data)
      } else {
        res.status(404).json({ message: 'Invalid ID' })
      }
    })
    .catch((err) => {
      res.status(400).json({ message: err.message })
    })
};

const postNewUser = (req, res) => {
  const { first_name, last_name, email, password, birthday } = req.body
  userControllers.createNewUser({ first_name, last_name, email, password, birthday })
    .then(async (data) => {
      res.status(201).json(data)
    })
    .catch((err) => {
      res.status(400).json({
        message: err.message,
        correct_format_data: {
          first_name: 'string',
          last_name: 'string',
          email: 'string',
          password: 'string',
          birthday: 'YYYY/MM/DD'
        }
      })
    })

}
const patchUser = (req, res) => {
  const id = req.params.id
  const { first_name, last_name, email, password, birthday } = req.body

  userControllers.updateUser(id, { first_name, last_name, email, password, birthday })
    .then((data) => {
      if (data) {
        res.status(200).json({ message: `User edited succesfully with id: ${id}` })
      } else {
        res.status(404).json({ message: `User with id: ${id}, not found` })
      }
    })
    .catch((err) => {
      res.status(400).json({ message: err.message })
    })
}

const deleteUser = (req, res) => {
  const id = req.params.id
  userControllers.deleteUserById(id)
    .then((data) => {
      if (data) {
        res.status(200).json(data)
      } else {
        res.status(400).json({
          message: 'invalid User ID'
        })
      }
    })
    .catch((err) => {
      res.status(400).json({ message: err.message })
    })

}


module.exports = {
  getAllUsers,
  getUserById,
  postNewUser,
  patchUser,
  deleteUser
}