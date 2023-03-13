const mongoose = require('mongoose')
const dotenv = require('dotenv').config()

mongoose.set('strictQuery', true)
// console.log(process.env.DB_URI);
function db(){
    return mongoose.connect(process.env.DB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
}

module.exports = db()