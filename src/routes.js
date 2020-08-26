const express = require('express')

const AuthController = require('./controllers/AuthController')
const UserController = require('./controllers/UserController')

const router = express.Router()

router.get('/', (req, res) => {
  return res.json({ message: 'sucess' })
})

// Authenticates routes
router.post('/authenticate', AuthController.authenticate)

// User routes
router.post('/users', UserController.create)

module.exports = router