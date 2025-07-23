require('dotenv').config()
const express = require('express')
const app =express();
const connectedDb = require('./database/data')
const bookRouter = require('./router/book-routes')

const PORT = process.env.PORT || 3000

//connection
connectedDb("mongodb://localhost:27017/books")

//middleWare 
app.use(express.urlencoded({extended : false}));
app.use(express.json())

//routes
app.use('/api',bookRouter)


app.listen(PORT ,()=> console.log("Server is connected to the PORT : ",PORT)
)