const Team = require('../models/Teams')

exports.createTeam = async(req, res)=>{
    try {
        const team = new Team({
            team_name : req.body.team_name,
            team_motto : req.body.team_motto
        })
        await team.save()
        res.status(200).json({
            message : `Team has been created successfully`,
            team
        })
    } 
    catch (error) {
        console.log(error)
        res.status(500).json(error)
    }
}

exports.getAllTeams = async(req, res)=>{
    try {
        const getAllteams = await Team.find()
        if(!getAllteams) return res.status(400).json({
            error : "No teams found"
        })

        res.status(200).json(getAllteams)

    } catch (error) {
        res.status(500).json(error)
    }
}