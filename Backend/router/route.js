const express = require('express')
const route = express.Router()
const userController = require('../controller/userController')
const authMiddleWare = require('../middleware/authMiddleware')


route.post('/signUp',userController.signUp)
route.post('/login',userController.login)
route.get('/logout',userController.logOut)
route.get('/authCheck',authMiddleWare,userController.authCheck)
route.get('/dashBoard',authMiddleWare,userController.dashBoard)

module.exports = route