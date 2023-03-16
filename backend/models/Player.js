const mongoose = require('mongoose')
const Schema = mongoose.Schema

const PlayerSchema = new Schema({
    firstname : {
        type : String,
        required : true,
        lowercase : true
    },
    lastname : {
        type : String,
        required : true,
        lowercase : true
    },
    displayName : {
        type : String,
        required : true,
        lowercase : true,
        unique : true
    },
    number : {
        type : Number,
        required : true
    },
    team : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Team'
    },
    coach : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Coach'
    },
    position : {
        type : String,
        enum : ['attacker', 'midfielder', 'defender', 'goalkeeper'],
        required : true,
        lowercase : true

    },
    weekly_points : {
        type : Number,
        default : 0
    },
    total_points : {
        type : Number,
        default : 0
    },
    approved : {
        type : Boolean,
        default : false
    }
})

//  REMEMBER TO ADD PLAYER IMAGE

module.exports = mongoose.model('Player', PlayerSchema)