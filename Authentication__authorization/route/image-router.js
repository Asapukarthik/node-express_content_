const express = require('express')
const route = express.Router()
const { authMiddleWare } = require('../middleware/auth')
const { adiminMiddleware } = require('../middleware/admin-middleware')
const { upload } = require('../middleware/upload-middleware')
const { imageUpload ,fetchImage,deleteImage} = require('../controllers/image-controller')

route.post('/upload', authMiddleWare, adiminMiddleware, upload.single('image'), imageUpload)

route.get('/get',authMiddleWare, adiminMiddleware,fetchImage)

route.delete('/delete/:id',authMiddleWare,adiminMiddleware,deleteImage)



module.exports = route