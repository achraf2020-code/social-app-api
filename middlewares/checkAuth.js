const jwt = require('jsonwebtoken')
const { BadRequestError,UnauthorizedRequest} = require('../customErrors')

const checkAuth = async (req,res,next)=>{
    authHeader = req.headers.authorization
   if(!authHeader || !authHeader.startsWith('Bearer')){
       throw new UnauthorizedRequest('Unauthorized Access!')
   }
   const token = authHeader.split(' ')[1]
   try {
       const decode = jwt.decode(token,process.env.JWT_SECRET)
       const {id,name} = decode
       req.user = {id,name}
       next()
   } catch (error) {
       throw new BadRequestError('Invalid tokekn!')
   }
}

module.exports = checkAuth