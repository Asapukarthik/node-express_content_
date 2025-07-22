const jwt = require('jsonwebtoken')


const authMiddleWare = (req,res,next)=>{

    const authHeader = req.headers['authorization']
    // console.log(authHeader)

    const token = authHeader && authHeader.split(" ")[1]
    if(!token) return res.status(400).json({
        msg : "token is required"
    })

    const decodeTokenInfo = jwt.verify(token,process.env.jwt_secret_key)
    // console.log(decodeTokenInfo)
    req.userInfo = decodeTokenInfo

    next()
}

module.exports= { authMiddleWare}
