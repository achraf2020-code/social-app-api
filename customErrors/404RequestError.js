const CustomApiError = require("../customErrors/error");
const {StatusCodes} = require('http-status-codes')

class NotFoundError extends CustomApiError {
    constructor(message,statusCode){
        super(message)
        this.statusCode = StatusCodes.NOT_FOUND
    }
}
module.exports =  NotFoundError