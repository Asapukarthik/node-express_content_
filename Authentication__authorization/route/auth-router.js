const express =  require('express')
const {authMiddleWare} = require('../middleware/auth')

const router = express.Router()
const {regiseterUser,loginUser,changePassword} = require('../controllers/auth-controller')


router.post('/register',regiseterUser)
router.post('/login',loginUser)
router.post('/changepass',authMiddleWare,changePassword)

module.exports= router;