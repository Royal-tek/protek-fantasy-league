const router = require('express').Router()
const userController = require('../controllers/userController')
const isAuth = require('../middleware/isAuth')

router.put('/update-user', userController.updateUser)
router.delete('/delete-user', isAuth.isAuthenticated, userController.deleteUser)

router.get('/get-user', isAuth.isAuthenticated, userController.getUser)
router.get('/all-users', userController.getAllUsers)


module.exports = router