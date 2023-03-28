const router = require('express').Router()
const pointController = require('../controllers/pointController')

router.put('/award-point/:playerId', pointController.awardPoint)
router.get('/get-point/:playerId', pointController.getPlayerPoints)
router.post('/create-week', pointController.createWeek)

module.exports = router