const Player = require('../models/Player')
const Team = require('../models/Teams')
const formidable = require('formidable')
const cloudinary = require('../utils/cloudinary')

const form = formidable({ multiples : true })

exports.createPlayer = async(req, res, next)=>{
    try {
        
        form.parse(req,  async (err, fields, files)=>{

            if(err){
                next(err)
                return
            }

            const {displayName, team, ...others } = fields
            const { imageUrl } = files
            const checkTeam = await Team.findById(team)
            if(!checkTeam) return res.status(400).json({
                error : "Player cannot be in assigned to a  team that does not exist"
            })
        
            const checkDisplayName = await Player.findOne({ displayName : displayName})
            if(checkDisplayName) return res.status(400).json({
                error : "That display name has been taken"
            })

        
            let image = ''
            
            if(files.imageUrl){
            const data = await cloudinary.uploader.upload(files.imageUrl.filepath, {
                width : 400,
                height : 400,
                crop : 'fill'
            }, (error)=>{
                if(error){
                    console.log(error)
                    return
                }

            })
            image = data.secure_url
        }

        
        const player = new Player({
            displayName,
            team,
            imageUrl : image,
            ...others
            
        })

        await player.save()
        res.status(201).json(player)
        })

        
    } catch (error) {
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
        
        

        res.status(200).json(players)
    } catch (error) {
        console.log(error)
        res.status(500).json(error)
    }
}

exports.approvePlayer = async (req, res)=>{
    try {
        const {id} = req.params
        const player = await Player.findById(id)

        if(!player) return res.status(400).json({
            error : "Player not found"
        })

        if(player.approved == true) return res.status(400).json({
            error : 'Player is already approved'
        })

        const approvePlayer = await Player.findByIdAndUpdate({ _id : id}, {
            approved : true
        }, 
        {
            new : true
        }
        )

        res.status(200).json({
            message : "Player has been approved"
        })

    } catch (error) {
        res.status(500).json(error)
        console.log(error)
    }
}