const jwt = require('jsonwebtoken')

const authMiddleWare = async(req,res,next)=>{
    try {
        let token = req.headers.authorization
        console.log('token',token);
        if(!token){
            res.status(401).json({message:'Not authorized!, No token'})
        }
        const decode = jwt.verify(token,'secretKeyOfJwt')
        console.log('dcode',decode);
        if(decode?.role ==='user'){
            req.id=decode?.id
            next()
        }

    } catch (error) {
        console.log(error.message);
    }
}

module.exports = authMiddleWare