const router = require('express').Router();

const userServices = require('./users.services');


router.route('/')
  .get(userServices.getAllUsers)
  .post(userServices.postNewUser)
  .get(userServices.getUserById)
  .delete(userServices.deleteUser)

router.patch('/:id', userServices.patchUser)

module.exports = router;