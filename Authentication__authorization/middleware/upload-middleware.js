const multer= require('multer')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads')
    },
    filename: function (req, file, cb) {
      cb(null,`${Date.now()}-${file.originalname}`)
    }
});

// const CheckfileFilter = async(req,file,cn)=>{
//     if()
// }

const upload = multer({ storage})

module.exports={upload}