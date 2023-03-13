const User = require('../models/User')
const jwt = require('jsonwebtoken')

exports.isAuthenticated = async(req, res, next)=>{
    const authHeader = req.headers.authorization
    const token = authHeader && authHeader.split(' ')[1]
    try {
        if(token == null){
            return res.status(400).json({
                error : "You are not authenticated"
            })
        }
    
        // verify token
        const decoded = jwt.verify(token, process.env.SECRET_KEY)
        const user = await User.findById(decoded.userId)
        if(!user) return res.sendStatus(404)
        req.user = decoded
        next()
    } 
    

    catch (error) {
        res.status(500).json(error)
    }
    
}

exports.isCoach = async(req, res, next)=>{
    try{
    const { email } = req.user
    const coachUser = await User.findOne({ email })
    if(adminUser.role !== 'coach'){
        return res.status(403).json({
            error : "You are not an Coach User"
        })
    }else{
        next()
    }

    } 

    catch(err){
        res.status(500).json(err)
    }
}

exports.isAdmin = async(req, res, next)=>{
    try{
    const { email } = req.user
    const adminUser = await User.findOne({ email })
    if(adminUser.role !== 'admin'){
        return res.status(403).json({
            error : "You are not an Admin User"
        })
    }else{
        next()
    }

    } 

    catch(err){
        res.status(500).json(err)
    }
}