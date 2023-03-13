const User = require('../models/User')


exports.updateUser = async (req, res)=>{
    try {
        // const { _id } =  req.user
        const {id} = req.user
        const updateUser = await User.findByIdAndUpdate(id, 
            {
                firstname : req.body.firstname,
                lastname : req.body.lastname,
                email : req.body.email
            },
            {new:true}
            )
        
        res.status(200).json({
            message : 'User Sucessfully Updated',
            updateUser
        })


    } catch (error) {
        res.status(500).json(error)
    }
}


exports.deleteUser = async(req, res)=>{
    try {
        // const { id } = req.params
        const { id } = req.user
        const deleteUser = await User.findByIdAndDelete(id)
        res.status(200).json({
            message : "User successfully deleted",
            deleteUser
        })
    } catch (error) {
        res.status(500).json(error)
    }
}

//  GET A SINGLE USER
exports.getUser = async(req, res)=>{
    try {
        const { id } = req.user
        const getUser = await User.findById(id)
        if(!getUser) return res.status(400).json({
            error : "User with that ID does not exist"
        })
        res.status(200).json({
            getUser
        })
    } catch (error) {
        console.log(error)
        res.status(500).json(error)
    }
}

// GET ALL USERS
exports.getAllUsers = async(req, res)=>{
    try {
        const allUsers = await User.find()
        res.status(200).json(allUsers)
    } catch (error) {
        res.status(500).json(error)
    }
}