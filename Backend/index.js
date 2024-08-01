const express = require('express')
const app = express()
const connectDB = require('./config/database')

const port = 4000

app.use(express.urlencoded({extended:true}))

connectDB()

app.listen(port,()=>{
    console.log(`server running on http://localhost:${port}`);
})