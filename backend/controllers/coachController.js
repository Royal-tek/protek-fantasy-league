const Coach = require('../models/Coach')
const User = require('../models/User')
const Team = require('../models/Teams')


exports.createCoach = async (req, res)=>{
    try {
        const userId = req.params.userId
        const user_data = await User.findById(userId)
        const {password, verified, ...other} = user_data._doc
    
        const teamId = req.params.teamId
        const team_data = await Team.findById(teamId)
        // console.log(team_data);

        
        if(!user_data) return res.status(400).json({
            error : 'User not found'
        })
        
        const coach = new Coach({
            user : other,
            team : teamId
        })

        if(user_data.role === 'coach') return res.status(404).json({
            error : 'User is already a coach'
        })

        

        const updateUser = await User.findOneAndUpdate({ _id : userId}, {
            role : 'coach'
        },
        {
            new : true
        }
        )


        await coach.save()
        res.status(200).json('User has been made coach')

    } catch (error) {
        console.log(error);
        res.status(500).json(error)
    }
}



exports.getAllCoaches = async(req, res)=>{
    try {
        const coaches = await Coach.find()
        .populate('user')
        .populate('team')
        res.status(200).json(coaches)
    } catch (error) {
        res.status(500).json(error)
    }
}