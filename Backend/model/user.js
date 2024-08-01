const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    referral:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Referral'
    },
    level: {
        type:Number,
        default:1
    },
    earnings:{
        type:Number,
        default:0
    }

})

const User = mongoose.model('User',userSchema)
module.exports = User