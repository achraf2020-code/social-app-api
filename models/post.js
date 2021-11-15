const mongoose = require('mongoose')
const {Schema} = mongoose

const postSchema = new Schema({
    text:{
        type:String,
        required:[true,'Please enter a text!'],
        minlength:[2,'Text is too short!'],
        maxlength:[100,'Text is too long']
    },
    createdBy:{
        type:mongoose.Types.ObjectId,
        ref:'User'
    }
},{timestamps:true})
module.exports = mongoose.model('Post',postSchema)