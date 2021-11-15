 const bcrypt = require('bcryptjs')
 const jwt = require('jsonwebtoken')
const User = require('../models/user')
const { BadRequestError,UnauthorizedRequest} = require('../customErrors')
const {errors} = require('../ErrorMessages/errors')
const {StatusCodes} = require('http-status-codes')
require('express-async-errors')
module.exports = {
    login:async (req,res)=>{
        const {email,password} = req.body
        if(!email || !password){
            throw new BadRequestError('Password and Email are required! ')
        }
        const user =await User.findOne({email:email})
        
        if(!user){
            throw new UnauthorizedRequest ('Please check your email or password! ')
        }
        const isMatch = await bcrypt.compare(password,user.password)
        if(!isMatch){
            throw new UnauthorizedRequest ('Please check your email or password! ')
        }
        const token = jwt.sign({id:user._id,name:user.name},process.env.JWT_SECRET,{expiresIn:process.env.JWT_LIFE_TIME})

        res.status(StatusCodes.OK).json({user:{name:user.name,token}})
    },
    register : async (req,res)=>{
        const {password,email,name} = req.body
        if(!password){
            throw new BadRequestError('Password is required!')
        }
        const salt = await bcrypt.genSalt(10)
        const hashedPass = await bcrypt.hash(password,salt)
        const userTemp = {
            password : hashedPass,
            email:email,
            name:name
        }
        const user = await User.create(userTemp)
        const token = await jwt.sign({id:user._id,name:user.name},process.env.JWT_SECRET,
            {expiresIn:process.env.JWT_LIFE_TIME})
        res.status(StatusCodes.OK).json({user:{name:user.name,token}})
    }
}