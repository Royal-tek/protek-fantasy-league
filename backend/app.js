const express = require('express')
const db = require('./config/db')
const dotenv = require('dotenv').config()
const port = process.env.PORT
const app = express()

const authRoutes = require('./routers/authRoutes')
const userRoutes = require('./routers/userRoutes')
const UserTeamRoutes = require('./routers/UserTeamRoutes')
const PlayerRoutes = require('./routers/playerRoutes')
const TeamRoutes = require('./routers/teamRoutes')
const coachRoutes = require('./routers/coachRoutes')
const cors = require('cors')
const cloudinary = require('cloudinary').v2

app.use(cors())
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_USER_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
})

app.use(express.json())
app.use(express.urlencoded({ extended : false}))

app.use('/api/auth', authRoutes)
app.use('/api/user', userRoutes)
app.use('/api/user-team', UserTeamRoutes)
app.use('/api/player', PlayerRoutes) 
app.use('/api/teams', TeamRoutes) 
app.use('/api/coach', coachRoutes) 



db
.then(response=>{
console.log(`Database Connected `)
app.listen(port, ()=>{
    console.log(`Server running on port ${port}`)
})

})
.catch(error=>console.log(`Database ${error}`))


