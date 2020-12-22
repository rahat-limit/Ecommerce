const router = require('express').Router()
const ctr = require('../Controller/productCtr')
const valid = require('../validator/valid')

router.route('/product')
    .post(valid.product, ctr.create)
    .get(ctr.get)
router.route('/product/:id')
    .delete(ctr.delete)
    .put(ctr.put)

module.exports = router;