const UserTeam = require('../models/UserTeam')
const User = require('../models/User')


exports.createTeam = async(req, res)=>{
    try {
        
        const {players, team_name, captain} = req.body
    
        const userTeam = new UserTeam({
            captain : captain,
            team_owner : req.user.userId,
            players : players,
            team_name : team_name
        })
        
        await userTeam.save()
        res.status(201).json({
            message : "Team Created sucessfully",
            userTeam
        })

    } catch (error) {
        res.status(500).json(error)
    }
}

exports.updateTeam = async(req, res)=>{
    try {
        const userId = req.user.userId
        const teamId = req.params.id
        
        const updateTeam = await UserTeam.findOneAndUpdate({_id : teamId, team_owner : userId}, 
            {
                $set : req.body
            },
            {
                new : true
            })

            if(!updateTeam) return res.status(404).json({
                error : "You can only update your team"
            })

            res.status(200).json({
                message : "Team updated successfully",
                updateTeam
            })
    } catch (error) {
        res.status(500).json(error)
    }
}

exports.deleteTeam = async(req, res)=>{
    try {
        const userId = req.user.userId
        const teamId = req.params.id
        const team = await UserTeam.findOneAndDelete({ _id : teamId, team_owner : userId })

        if(!team) return res.status(404).json({
            error : "You can only delete a team you created"
        })
    
        res.status(200).json({
            message : "Team deleted Successfully"
        })
    } catch (error) {
        
        res.status(500).json(error)
    }
}

exports.getAUserTeam = async(req ,res)=>{
    try {
        const teamId = req.params.id
        const userId = req.user.userId
        const userTeam = await UserTeam.findById(teamId)
        if(!userTeam) return res.status(400).json({
            error : 'Requested team does not exist'
        })
        res.status(200).json({
            message : userTeam
        })
    } catch (error) {
        res.status(500).json(error)
    }
}

exports.userTeam = async(req ,res)=>{
    try {
        const userId = req.user.userId
        const userTeam = await UserTeam.findOne({ team_owner : userId })
        if(!userTeam) return res.status(400).json({
            error : 'Requested team does not exist'
        })
        res.status(200).json({
            message : userTeam
        })
    } catch (error) {
        res.status(500).json(error)
    }
}