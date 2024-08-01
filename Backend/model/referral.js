const mongoose = require('mongoose')

const referralSchema = mongoose.Schema({
    level1:{
        type:Number,
        default:10
    },
    level2:{
        type:Number,
        default:8
    },
    level3:{
        type:Number,
        default:5
    },
    amount:{
        type:Number,
        default:1000
    }
    
})

const Referral = mongoose.model('Referral',referralSchema)
module.exports = Referral