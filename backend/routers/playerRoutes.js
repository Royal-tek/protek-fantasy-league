const router = require('express').Router()
const playerController = require('../controllers/playerController')

router.post('/create-player', playerController.createPlayer)
router.put('/edit-player/:id', playerController.editPlayer)
router.get('/get-all-players', playerController.getPlayers)



module.exports = router