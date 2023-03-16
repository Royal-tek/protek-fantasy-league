const mongoose = require('mongoose')
const Schema = mongoose.Schema

const TeamSchema = new Schema({
    team_name : {
        type : String
    },
    team_motto : {
        type : String
    }
})

module.exports = mongoose.model('Team', TeamSchema)