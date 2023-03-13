const express = require('express')
const db = require('./config/db')
const dotenv = require('dotenv').config()
const port = process.env.PORT
const app = express()

const authRoutes = require('./routers/authRoutes')
const userRoutes = require('./routers/userRoutes')
const UserTeamRoutes = require('./routers/UserTeamRoutes')

app.use(express.json())
app.use(express.urlencoded({ extended : false}))

app.use('/api/auth', authRoutes)
app.use('/api/user', userRoutes)
app.use('/api/team', UserTeamRoutes)



db
.then(response=>{
console.log(`Database Connected `)
app.listen(port, ()=>{
    console.log(`Server running on port ${port}`)
})

})
.catch(error=>console.log(`Database ${error}`))


