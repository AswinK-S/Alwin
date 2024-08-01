const User = require('../model/user')
const bcrypt = require('bcryptjs')
const jwt =require('jsonwebtoken')


//jwtToken
const generateToken = (id,role)=>{
   return jwt.sign({id,role},'secretKeyOfJwt',{expiresIn:'1d'})
}

//signUp
const signUp = async(req,res)=>{
    try {
        console.log('req.bdy',req.body);
        const {name,email,password,referral} = req.body
        console.log('name',name,'email',email,'pass',password);
        const hashedPassword = await bcrypt.hash(password,10)
        const user = await new User({name,email,password:hashedPassword})

        if(referral){
            const referrer  =await  User.findById(referral)
            if (referrer) {
                user.referral = referral;
                user.level = referrer.level + 1;
              }

        }

        await user.save()
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
          });

    } catch (error) {
        console.log(error.message);
    }
}

//login
const login =async(req,res)=>{
    try {
        const {email,password} = req.body
        const user = await User.findOne({email:email})
        if(!user){
            res.status(401).json({message:'user does not exist'})
        }
        const isPasswordMatch = await bcrypt.compare(password,user?.password)
        console.log('password match',isPasswordMatch);

        if(!isPasswordMatch){
            res.status(401).json({message:'invalid credentials'})
        }
        const token =await generateToken(user._id,'user')
        console.log('token',token);
        res.status(200).json({
            id:user._id,
            name:user.name,
            email:user.email,
            token
        })

    } catch (error) {
       console.log(error.message); 
    }
}

//dashBoard
const dashBoard = async(req,res)=>{
    try {
         const id = req.id
         const user = await User.findById({_id:id})
         if(user){
            res.status(200).json({
                id:user._id,
                email:user.email,
                name:user.name,
                level:user.level,
                earnings:user.earnings
            })
         }
    } catch (error) {
       console.log(error.message) 
    }
}

module.exports={
    signUp,
    login,
    dashBoard
}