

const errorHandler = (err,req,res,next)=>{
    const customError = {
        statusCodes : err.statusCode || 500 ,
        message  : err.message || 'Somthing Went Wrong!'
    }
    res.status(customError.statusCodes).json({error:customError.message})
}
module.exports = errorHandler