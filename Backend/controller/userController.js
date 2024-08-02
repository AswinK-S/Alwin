const User = require('../model/user')
const Reward =require ('../model/reward.js')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')


//jwtToken
const generateToken = (id, role) => {
    return jwt.sign({ id, role }, 'secretKeyOfJwt', { expiresIn: '1d' })
}

//signUp
const signUp = async (req, res) => {
    try {
        const { name, email, password, referral } = req.body
        const hashedPassword = await bcrypt.hash(password, 10)
        const user = await new User({ name, email, password: hashedPassword })

        if (referral) {
            const referrer = await User.findById(referral)
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
const login = async (req, res) => {
    try {
        const { email, password } = req.body
        const user = await User.findOne({ email: email })
        if (user === null) {
            res.status(401).json({ message: 'user does not exist' })
        }
        const isPasswordMatch = await bcrypt.compare(password, user?.password)
        console.log('password match', isPasswordMatch);

        if (!isPasswordMatch) {
            res.status(401).json({ message: 'invalid credentials' })
        }else{
            const token = generateToken(user._id, 'user')
            await res.cookie('token',token,{
                httpOnly:true,
                secure:process.env.NODE_ENV === 'production',
                maxAge: 24 * 60 * 60 * 1000 
            })

            res.status(200).json({
                id: user._id,
                email: user.email,
                name: user.name,
                level: user.level,
                earnings: user.earnings
            })


        }

    } catch (error) {
        console.log(error);
    }
}

//dashBoard
const dashBoard = async (req, res) => {
    try {
        const id = req.id
        const user = await User.findById({ _id: id })
        if (user) {
            res.status(200).json({
                id: user._id,
                email: user.email,
                name: user.name,
                level: user.level,
                earnings: user.earnings
            })
        }
    } catch (error) {
        console.log(error.message)
    }
}

const authCheck = async (req, res) => {
    res.status(200).json({ isAuthenticated: true });
};

//logout
const logOut = async(req,res)=>{
    try {
        res.clearCookie('token')
        res.status(200).json({ message: 'Logged out successfully' });
    } catch (error) {
      console.log(error);  
    }
}



module.exports = {
    signUp,
    login,
    dashBoard,
    authCheck,
    logOut
}