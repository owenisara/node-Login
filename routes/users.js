const express = require('express')
const router = express.Router()
const{listUser,readUser,updateUser,removeUser,changeStatus,changeRole}=require('../controller/users')
const{auth,adminCheck}=require('../middleware/auth')


//Endpoint http://licalhost:5500/api
//Method GET
//Access Private
router.get('/users',auth,adminCheck,listUser)
//Endpoint http://licalhost:5500/api
//Method GET
//Access Private
router.get('/users/:id',readUser)
//Endpoint http://licalhost:5500/api
//Method put
//Access Private
router.put('/users/:id',updateUser)
//Endpoint http://licalhost:5500/api
//Method delete
//Access Private
router.delete('/users/:id',removeUser)

//Endpoint http://licalhost:5500/api
//Method Post
//Access Private
router.post('/change-status',auth,adminCheck,changeStatus)

router.post('/change-role',auth,adminCheck,changeRole)


  







module.exports = router