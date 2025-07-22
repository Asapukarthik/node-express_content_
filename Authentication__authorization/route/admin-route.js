const express = require('express')
const route = express.Router()
const {authMiddleWare} = require('../middleware/auth')
const{adiminMiddleware} = require('../middleware/admin-middleware')

route.get('/',authMiddleWare,adiminMiddleware,(req,res)=>{
    return res.json({
        msg : "welcome to the admin page ",

    })

})

module.exports = route