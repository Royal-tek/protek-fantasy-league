const router = require('express').Router()
const playerController = require('../controllers/playerController')
const isAuth = require('../middleware/isAuth')

router.post('/create-player', playerController.createPlayer)
router.put('/edit-player/:id', playerController.editPlayer)
router.get('/get-all-players', playerController.getPlayers)
router.put('/approve-player/:id',  isAuth.isAuthenticated, isAuth.isCoach, playerController.approvePlayer)



module.exports = router