

const mongoose = require('mongoose')

const {Schema} = mongoose

const userSchema = new Schema({
    name:{
        type:String,
        required:[true,'Name is required!'],
        trim:true,
        maxlength:[20,'Name is too long!'],
        minlength:[3,'Name too short!']
    },
    email:{
        type:String,
        match:[/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,'Email not valid!'],
        required:[true,'Email is required!'],
        trim:true,
        unique:true,
    },
    password:{
        type:String,
        required:[true,'Password is required!']
    }
},{timestamps:true})

module.exports = mongoose.model('User',userSchema)