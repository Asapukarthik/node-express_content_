require('dotenv').config()
const express= require('express')
const app = express()
const authRouter = require('./route/auth-router') 
const homeRouter = require('./route/home-route')
const adminRouter = require('./route/admin-route')
const imageRoute = require('./route/image-router')

const {connectTODb} = require('./database/db')
connectTODb();

const PORT = process.env.PORT || 8000

app.use(express.json());
app.use(express.urlencoded({extended : false}))

app.use('/',authRouter)
app.use('/home',homeRouter)
app.use('/admin',adminRouter)
app.use('/image',imageRoute)
app.listen(PORT,()=> console.log(`Server is Connected to the PORT ${PORT}`))