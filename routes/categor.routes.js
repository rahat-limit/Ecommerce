const router = require('express').Router()
const ctr = require('../Controller/categoryCtr')

router.route('/category/:id')
    .get(ctr.get)
module.exports = router;