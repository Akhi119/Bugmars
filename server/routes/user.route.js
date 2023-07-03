const express = require('express')
const router = express.Router()
const userService = require('../services/user.service')

// Create an new user
router.post('/', userService.createUsers)

module.exports = router
