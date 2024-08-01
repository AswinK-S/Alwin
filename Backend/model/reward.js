const mongoose = require('mongoose')

const rewardSchema = mongoose.Schema({
    diamond:{
        type:Number,
        default:1000

    },
    gold:{
        type:Number,
        default:700
    },
    silver:{
        type:Number,
        default:500
    },
    earnings:{
        type:Number,
        default:0 
    },
    level:{
        type:Number,
        default:1
    }
})

const Reward = mongoose.model('Reward',rewardSchema)
module.exports = Reward