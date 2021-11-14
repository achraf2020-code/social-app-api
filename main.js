const express = require('express')
const dotenv = require('dotenv')

//app require
const appRoutes = require('./routes')

//app config
const app = express()
dotenv.config()
const port = process.env.PORT || 3000

//app middlewares
app.use(express.json())
app.use('/api/v1',appRoutes)
//app routes

//db Connect

//app listen
// app.get('/',(req,res)=>{
//  res.send('Wellcome To App')
// })

app.listen(port,()=>{
    console.log(`Server Start At Port ${port}`)
})
