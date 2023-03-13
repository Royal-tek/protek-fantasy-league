const router = require('express').Router()
const UserTeamController = require('../controllers/UserTeamController')
const isAuth = require('../middleware/isAuth')

router.post('/create-team', isAuth.isAuthenticated ,UserTeamController.createTeam)
router.get('/my-team', isAuth.isAuthenticated ,UserTeamController.userTeam)
router.put('/update-team/:id', isAuth.isAuthenticated, UserTeamController.updateTeam)
router.delete('/delete-team/:id', isAuth.isAuthenticated, UserTeamController.deleteTeam)
router.get('/get-user-team/:id', isAuth.isAuthenticated, UserTeamController.getAUserTeam)


module.exports = router