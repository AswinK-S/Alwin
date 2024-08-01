const e = require('express')
const User = require('../model/user')
const bcrypt = require('bcryptjs')


//signUp
const signUp = async(req,res)=>{
    try {
        const {name,email,password,referral} = req.body
        const hashedPassword = await bcrypt.hash(password,10)
        const user = await new User({name,email,password:hashedPassword,referral})

        if(referral){
            const referrer  =await  User.findOne()
        }
    } catch (error) {
        console.log(error.message);
    }
}