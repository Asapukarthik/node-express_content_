const mongoose = require('mongoose')

const connectedDb = async(url)=>{
    try{
         await mongoose.connect(url)
        console.log("mongoose is connected successfullyc");
    }catch(error){
        console.error("mongoose is not connected ",error)
    }
}
module.exports =connectedDb;