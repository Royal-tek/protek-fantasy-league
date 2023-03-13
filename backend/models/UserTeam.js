const mongoose = require('mongoose')
const Schema = mongoose.Schema

const TeamSchema = new Schema({
    team_owner : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User'
    },
    week : {
        type : Number
    },
    players : {
        captain : {
            type : String
        },
        goalkeeper : {
            type : String
        },
        defenders : [],
        midfielders : [],
        attackers : [],
    },
    weekly_points : {
        type : Number,
        default : 0
    },
    total_points : {
        type : Number,
        default : 0
    }

},
{ timestamps : true}
)

module.exports = mongoose.model('userTeam', TeamSchema)