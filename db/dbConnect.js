const mongoose = require('mongoose')

const dbConnect = (url)=>{

    mongoose.connect(url)
        .then(()=>{
            console.log('Succes Connect To Db')
        })
        .catch((error)=>{
            console.log('Error Connect To Db!')
        })
}
module.exports = dbConnect