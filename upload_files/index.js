const express = require('express')
const path = require('path')
const app = express()
const multer  = require('multer')
const PORT = 8000

app.set("view engine" ,"ejs");
app.set('views',path.resolve('./views'));

app.use(express.urlencoded({extended : false}));


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads')
    },
    filename: function (req, file, cb) {
      cb(null, `${Date.now()}-${file.originalname} `)
    }
  })
  
const upload = multer({ storage})


app.get('/',(req,res)=>{
    return res.render("home")
    
} )
app.post('/upload',upload.single("profileImage"),(req,res)=>{
    console.log(req.file)
    return res.redirect('/')
    
})


app.listen(PORT,()=>{
    console.log("Server is connected to the port",PORT);
    
})