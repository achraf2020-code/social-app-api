const {errors} = require('../ErrorMessages/errors')
const {StatusCodes} = require('http-status-codes')

const notFound = (req,res)=>{
    res.status(StatusCodes.NOT_FOUND).json({error:errors.RouteNotFoundError})
}
module.exports = notFound