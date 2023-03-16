const router = require('express').Router()
const coachController = require('../controllers/coachController')

router.post('/create-coach/:teamId/:userId', coachController.createCoach)
router.get('/get-coaches', coachController.getAllCoaches)

module.exports = router