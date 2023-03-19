const Player = require('../models/Player')
const Coach = require('../models/Coach')
const Team = require('../models/Teams')
const formidable = require('formidable')
const cloudinary = require('cloudinary').v2

const form = formidable({ multiples : true })

exports.createPlayer = async(req, res, next)=>{
    try {
        
        form.parse(req,  (err, fields, files)=>{

            if(err){
                next(err)
                return
            }
            const result =  cloudinary.uploader.upload(files.image.filepath, {
                width : 400,
                height : 400,
                crop : 'fill'
            })
            result.then((data)=>{
                console.log(data)
            })
            .catch((err)=>{
                console.log(err)
            })
            
        })

        
        
        

        
        // const {displayName, team, coach, ...others } = req.body
        // const checkTeam = await Team.findById(team)
        // if(!checkTeam) return res.status(400).json({
        //     error : "Player cannot be in assigned to a  team that does not exist"
        // })
        // const checkCoach = await Coach.findById(coach)
        // if(!checkCoach) return res.status(400).json({
        //     error : "Player cannot be assigned to a coach that does not exist"
        // })
        // const checkDisplayName = await Player.findOne({ displayName : displayName})
        // if(checkDisplayName) return res.status(400).json({
        //     error : "That display name has been taken"
        // })

        // const player = new Player({
        //     displayName,
        //     team,
        //     coach,
        //     ...others
            
        // })

        

        // await player.save()
        // res.status(201).json(player)
    } catch (error) {
        console.log('kmkmkmkm')
        res.status(500).json(error)
    }
}

exports.editPlayer = async(req, res)=>{
    try {
        const { id } = req.params
        const findPlayer = await Player.findById(id)
        if(!findPlayer) return res.status(400).json({
            error : "Player does not exist"
        })

        const coach = await Coach.findById(req.body.coach)
        const team = await Team.findById(req.body.team)
        const {firstname, lastname, displayName,  position , number } = req.body
        const player = await Player.findByIdAndUpdate( {_id:id}, {
            firstname : firstname,
            lastname : lastname,
            displayName : displayName,
            team : team,
            position : position,
            coach : coach,
            number : number
        }, {
            new : true
        })

        await player.save()
        res.status(201).json({
            message : "Player updated Successfully",
            player
        })
    } catch (error) {
        res.status(500).json(error)
    }
}

exports.getPlayers = async(req, res)=>{
    try {
        const players = await Player.find().populate('team')
        .populate({
            path: 'coach',
            populate: { path: 'user'}
        })
        .populate({
            path: 'coach',
            populate: { path: 'team'}
        })

        res.status(200).json(players)
    } catch (error) {
        console.log(error)
        res.status(500).json(error)
    }
}