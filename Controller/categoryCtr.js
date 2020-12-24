const Product = require('../model/Product.js')

module.exports = {
    get: async (req, res) => {
        try {
            const product = await Product.find({ category: req.params.id })

            if (!product) return res.status(400).json({ msg: 'Category failed' })

            return res.status(200).json({ product })
        } catch (e) {
            return res.status(500).json({ msg: e.message })
        }
    }
}