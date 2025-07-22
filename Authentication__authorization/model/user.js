const { timeStamp } = require('console')
const mongoose = require('mongoose')
const { type } = require('os')

const userSchema  =  new mongoose.Schema({
    username :{
        type : String,
        required : true,
        unique : true,
        trim : true, 
    },
    email :{
        type : String,
        required : true,
        unique : true,
        trim : true, 
    },
    password : {
        type : String,
        required : true,
    },
    role : {
        type : String,
        enum : ['user' ,'Admin'], // allows the user or admin
        default : 'user' 
    }
},{timeStamp : true})

const User = mongoose.model('user',userSchema)

module.exports = User