const router = require('express').Router()
const valid = require('../validator/valid')
const ctr = require('../Controller/index')
const auth = require('../middleware/auth')

router.post('/register', valid.register, ctr.register)
router.post('/login', valid.login, ctr.login)
router.get('/getUser', auth, ctr.getUser)

module.exports = router;