const Point = require('../models/Points')
const Player = require('../models/Player')

// ON SETTING WEEK 
exports.createWeek = async(req, res)=>{
    try {
        const allPlayers = await Player.find()
        let week = (allPlayers.map(async (item)=>{
            const point = new Point({
                week : req.body.week,
                player : item._id
            })
            return await point.save()
        })) 
        
        week = await Promise.all(week)
        res.json("Created")

        console.log(week);
    } catch (error) {
        console.log(error);
        res.status(500).json(error)
    }
}

exports.awardPoint = async (req, res)=>{
    const {week, goals, assists, yellow_card, red_card} = req.body
    let obj = {}
    if(goals) obj.goals = goals
    
    
    try {

        const playerId = req.params.playerId
        const point = await Point.findOneAndUpdate({
            player : playerId,
            week
        },
        {
            ...others
        },
        {
            new : true
        }
        )
        
        res.status(200).json({
            message : 'Point has been updated successfully',
            point
        })
    } catch (error) {
        res.status(500).json(error)
    }
}


exports.getPlayerPoints = async (req, res)=>{
    try {
        const id = req.params.playerId
        const playerPoints = await Point.findOne({player : id}).populate('player')
        
        res.json({
            playerPoints,
        })
    } catch (error) {
        console.log(error);
        res.status(500).json(error)
    }
}