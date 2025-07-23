const express = require('express')
const route = express.Router()
const {getAllBoooks,createBook,getOneBook} = require('../controller/book-controller')

route.get('/',getAllBoooks)
route.post('/',createBook)
route.get('/:id',getOneBook)

module.exports = route;