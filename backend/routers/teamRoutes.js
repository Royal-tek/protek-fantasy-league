const router = require('express').Router()
const teamController = require('../controllers/teamController')
const isAuth = require('../middleware/isAuth')

router.post('/create-team/:coachId', teamController.createTeam)
router.get('/get-teams', teamController.getAllTeams)
router.get('/get-coaches', teamController.getTeamCoaches)
router.get('/get-coach-players', isAuth.isAuthenticated ,isAuth.isCoach , teamController.getAllTeamPlayers)

module.exports = router