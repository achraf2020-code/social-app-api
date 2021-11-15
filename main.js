const express = require('express')
const dotenv = require('dotenv')

//app require
const appRoutes = require('./routes')
const notFound = require('./middlewares/404')
const errorHandler  = require('./middlewares/errorHandler')
const dbConnect =require('./db/dbConnect')

//app config
const app = express()
dotenv.config()
const port = process.env.PORT || 3000

//app middlewares
app.use(express.json())
app.use('/api/v1',appRoutes)
app.use(notFound)
// app.use(errorHandler)
//app routes
// app.get('/',(req,res)=>{
//  res.send('Wellcome To App')
// })
//db Connect
dbConnect(process.env.MONGO_URI)
// app listen
app.listen(port,()=>{
    console.log(`Server Start At Port ${port}`)
})
