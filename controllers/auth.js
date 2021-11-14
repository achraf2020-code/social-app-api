const { BadRequestError,UnauthorizedRequest} = require('../customErrors')
require('express-async-errors')
module.exports = {
    login:async (req,res)=>{
        throw new BadRequestError('test Errors')
        // res.send('Login Route')
    },
    register : async (req,res)=>{
        res.send('Register Route')
    }
}