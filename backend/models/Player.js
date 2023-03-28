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
        ref : 'Team',
        required : true
    },

    position : {
        type : String,
        enum : ['attacker', 'midfielder', 'defender', 'goalkeeper'],
        required : true,
        lowercase : true

    },
    
    approved : {
        type : Boolean,
        default : false
    },
    imageUrl : {
        type : String
    }
})



module.exports = mongoose.model('Player', PlayerSchema)


// REMEMBER TO ADD WEEK MODEL AND POINT MODEL