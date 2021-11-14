const CustomApiError = require("../customErrors/error");
const {StatusCodes} = require('http-status-codes')

class UnauthorizedRequest extends CustomApiError {
    constructor(message,statusCode){
        super(message)
        this.statusCode = StatusCodes.UNAUTHORIZED
    }
}
module.exports =  UnauthorizedRequest