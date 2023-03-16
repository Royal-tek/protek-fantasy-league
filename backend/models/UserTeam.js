const mongoose = require('mongoose')
const Schema = mongoose.Schema

const TeamSchema = new Schema({
    team_owner : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User'
    },
    week : {
        type : Number,
        default : 1
    },
    
    players : {
        goalkeeper : {
            player : {
                type : mongoose.Schema.Types.ObjectId,
                ref : 'Player'
            }, 
            isCaptain : {
                type : Boolean,
                default : false
            }
        },

        defenders : [
            {
                player : {
                    type : mongoose.Schema.Types.ObjectId,
                    ref : 'Player'
                }, 
                isCaptain : {
                    type : Boolean,
                    default : false
                }
            }
        ],

        midfielders : [
            {
                player : {
                    type : mongoose.Schema.Types.ObjectId,
                    ref : 'Player'
                }, 
                isCaptain : {
                    type : Boolean,
                    default : false
                }
            }
        ],
        
        attackers : [
            {
                player : {
                    type : mongoose.Schema.Types.ObjectId,
                    ref : 'Player'
                }, 
                isCaptain : {
                    type : Boolean,
                    default : false
                }
            }
        ],
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