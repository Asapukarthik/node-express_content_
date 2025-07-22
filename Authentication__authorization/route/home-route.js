const express = require('express')
const route = express.Router()
const {authMiddleWare} = require('../middleware/auth')

route.get('/',authMiddleWare,(req,res)=>{
    const {userId,username,role} =  req.userInfo
    return res.json({
        msg : "welcome to the home page ",
        id : userId,
        name : username,
        role : role,
    })

})

module.exports = route