const { login, signup, getStudentInfo ,logout} = require('../controllers/studentController')
const protect = require('../middlewares/protect')

const router = require('express').Router()

router.post("/login",login)
router.post("/signup",signup)
router.post("/logout",logout)
router.get("/info",protect,getStudentInfo)

module.exports = router