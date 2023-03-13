const router = require('express').Router()
const authController = require('../controllers/authController')

// route to register a user
router.post('/register', authController.registerUser)


// route to login a user
router.post('/login', authController.loginUser)

module.exports = router