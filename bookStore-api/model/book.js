const mongoose = require('mongoose')

// creat a Schema
const booksSchema =  new mongoose.Schema({
    title : {
        type : String,
        required  : [true, "title is required"],
        trim : true,
        maxlength : [100 , " title cant be more than 100 Charaters"]
    },
    Auther : {
        type : String,
        required  : [true, "Auther is required"],
        trim : true,  
    },
    year : {
        type : Number,
        required  : true,
    },
},{timestamps : true})

// model
module.exports =  mongoose.model('BookStore-api',booksSchema);