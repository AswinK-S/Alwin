const mongoose = require('mongoose')

const databaseConnection = async()=>{
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/Alwin')
        console.log('mongoDB connected');
    } catch (error) {
       console.log(error.message); 
    }
}

module.exports = databaseConnection