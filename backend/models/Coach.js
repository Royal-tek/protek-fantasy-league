const mongoose = require('mongoose')
const Schema = mongoose.Schema

const CoachSchema = new Schema({
    user : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User'
    },
    team : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Team'
    }
    
})

module.exports = mongoose.model('Coach', CoachSchema)