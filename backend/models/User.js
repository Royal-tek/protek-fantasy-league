const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
    firstname : {
        type : String,
        required : true
    },
    lastname : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true,
        unique : true
    },
    verified : {
        type : Boolean,
        default : false
    },
    password : {
        type : String,
        required : true,
        minLength : 3
    },
    role : {
        type : String,
        enum : ['admin', 'coach', 'user'],
        default : 'user'
    }
})

module.exports = mongoose.model('User', UserSchema)