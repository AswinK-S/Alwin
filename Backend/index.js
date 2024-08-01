const express = require('express')
const app = express()
const connectDB = require('./config/database')
const userRoute = require('./router/route')
const cors = require('cors')


const port = 4000

app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.use(cors({
    origin:'http://localhost:5173',
    credentials:true,
    methods:['GET','POST','PATCH','PUT'],
    allowedHeaders:['Content-Type','Authorization']
}))

connectDB()
app.use('/',userRoute)


app.listen(port,()=>{
    console.log(`server running on http://localhost:${port}`);
})