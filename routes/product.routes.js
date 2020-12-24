const router = require('express').Router()
const ctr = require('../Controller/productCtr')
const valid = require('../validator/valid')

router.route('/product')
    .post(valid.product, ctr.create)
    .get(ctr.get)
router.route('/product/:id')
    .get(ctr.getOne)
    .delete(ctr.delete)
    .put(valid.product, ctr.put)
module.exports = router;