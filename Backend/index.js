const express = require('express')
const app = express()
const connectDB = require('./config/database')
const userRoute = require('./router/route')


const port = 4000

app.use(express.urlencoded({extended:true}))
app.use(express.json())

connectDB()
app.use('/',userRoute)

app.listen(port,()=>{
    console.log(`server running on http://localhost:${port}`);
})