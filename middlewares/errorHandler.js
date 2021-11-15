const CustomErrorApi = require('../customErrors/error')
const {StatusCodes} = require('http-status-codes')
const errorHandler = (err,req,res,next)=>{
    const customError = {
        statusCode : err.statusCode || 500 ,
        message    : err.message    || 'Somthing Went Wrong!'
    }
    if(err.name = "CastError"){
        customError.message = `Wrong id!`
        customError.statusCode = StatusCodes.NOT_FOUND
    }
    if(err.name === "ValidationError"){ 
        customError.message = Object.values(err.errors)
            .map((item)=>item.message)
            .join(',')
        customError.statusCode = StatusCodes.BAD_REQUEST
    }
    if(err.code && err.code === 11000){
        customError.message = `${Object.keys(err.keyValue)} alerdy exist!`
        customError.statusCode = StatusCodes.BAD_REQUEST
    }
    res.status(customError.statusCode).json({error:customError.message})
}
module.exports = errorHandler