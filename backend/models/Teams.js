const mongoose = require('mongoose')
const Schema = mongoose.Schema

const TeamSchema = new Schema({
    team_name : {
        type : String
    },
    coach : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User'
    }

})

module.exports = mongoose.model('Team', TeamSchema)