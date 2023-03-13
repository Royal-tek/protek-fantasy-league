const User = require('../models/User')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')


// REGISTER A USER
exports.registerUser = async(req, res)=>{
    try {
        const {firstname, lastname, email, password} = req.body
        const salt = await bcrypt.genSalt(10)
        const hashedPwd = await bcrypt.hash(password, salt)

        const emailExists = await User.findOne({ email : email})
        if (emailExists) return res.status(400).json({
            error : 'Email already in use'
        })

        const user = new User({
            firstname : firstname,
            lastname : lastname,
            email : email,
            password : hashedPwd
        })
        const newUser = await user.save()
        res.status(201).json(newUser)
    } catch (error) {
        console.log(error)
        res.status(500).json(error)
    }
}

// LOGIN A USER
exports.loginUser = async(req, res)=>{
    try {
        const { email, password} = req.body


        const user = await User.findOne({email:email})
        if(!user) return res.status(400).json({
            error : 'Account with this email does not exists'
        })

        const passwordCheck = await bcrypt.compare(password, user.password)
        if(!passwordCheck) return res.status(400).json({
            error : 'Invalid Username or Password'
        })

        const token = jwt.sign({userId : user._id, verified : user.verified}, process.env.SECRET_KEY, { expiresIn: '1h'})

        res.status(200).json({
            message : 'Login Success',
            token : token
        })


    } catch (error) {
        res.status(500).json(error)
    }
}

