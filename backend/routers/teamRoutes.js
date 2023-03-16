const router = require('express').Router()
const teamController = require('../controllers/teamController')

router.post('/create-team', teamController.createTeam)
router.get('/get-teams', teamController.getAllTeams)

module.exports = router