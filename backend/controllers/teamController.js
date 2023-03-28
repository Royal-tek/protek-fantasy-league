const Team = require('../models/Teams')
const Coach = require('../models/User')
const Player = require('../models/Player')

exports.createTeam = async(req, res)=>{
    try {
        const coach = req.params.coachId
        const checkCoach = await Coach.findById(coach)

        if(checkCoach.role === 'coach'){
            return res.status(400).json({
                error : "User is already a coach"
            })
        }
        
        const checkTeam = await Team.findOne({team_name : req.body.team_name})
        if(checkTeam) return res.status(404).json({
            error: 'Team with that name already exists'
        })


        const updateUser = await Coach.findByIdAndUpdate({_id : coach}, {
            role : 'coach'
        },
        {
            new : true
        }
        )


        const team = new Team({
            team_name : req.body.team_name,
            coach : coach
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
        const getAllteams = await Team.find().populate('coach')
        if(!getAllteams) return res.status(400).json({
            error : "No teams found"
        })

        res.status(200).json(getAllteams)

    } catch (error) {
        res.status(500).json(error)
    }
}



//  THIS IS THE CONTROLLER FOR GETTING ALL USERS THAT HAVE BEEN MADE COACHES
//  THE USER MODEL WAS REQUIRED UNDER THE COACH NAME THATS WHY THE REQUEST IS BEING MADE WITH COACH
exports.getTeamCoaches = async(req, res)=>{
    try {
        const coaches = await Coach.find({role : 'coach'})
        res.json(coaches)
    } catch (error) {
        console.log(error);
        res.status(500).json(error)
    }
}


exports.getAllTeamPlayers = async(req, res)=>{
    try {
        const coach = req.user._id
        const players = await Player.find().populate('team')

        const foundPlayers =  players.filter(player =>  {
            return player.team?.coach.toString() === coach.toString()
        })

        if(!foundPlayers) return res.json("No players found")

        res.json(foundPlayers)
        
    } catch (error) {
        console.log(error)
        res.status(500).json(error)
    }
}