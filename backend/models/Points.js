const mongoose = require('mongoose')
const Schema = require('mongoose').Schema
const Player = require('../models/Player')

const pointSchema = new Schema({
    player : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Player'
    },
    goals : {
        type : Number,
        default : 0
    },
    assists : {
        type : Number,
        default : 0
    },
    cleansheet : {
        type : Boolean,
        default : false
    },

    yellow_card : {
        type : Boolean,
        default : false
    },
    red_card : {
        type : Boolean,
        default : false
    },
    week : {
        type : Number,
        default :1
    },
    weekly_points : {
        type : Number,
        default : 0
    }
    
},{
    timestamps : true
})




module.exports = mongoose.model('Points', pointSchema)
