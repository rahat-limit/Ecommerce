const { validationResult } = require('express-validator');
const Product = require('../model/Product')

module.exports = {
    create: async (req, res) => {
        try {
            const errors = validationResult(req)

            if (!errors.isEmpty()) return res.status(400).json({ msg: errors.array()[0].msg })

            const { productId, name, description, price, category, images } = req.body;

            const product = await Product.findOne({ productId })

            if (product) return res.status(400).json({ msg: 'Product is already exists' })

            const newProduct = new Product({ productId, name, description, price, category, images })

            await newProduct.save()

            return res.status(200).json({ product: newProduct })
        } catch (e) {
            return res.status(500).json({ msg: e.message })
        }
    },
    get: async (req, res) => {
        try {
            const products = await Product.find()

            return res.status(200).json({ products })
        } catch (e) {
            return res.status(500).json({ msg: e.message })
        }
    },
    delete: async (req, res) => {
        try {
            await Product.findById(req.params.id)

            return res.status(200).json({ msg: 'Product deleted' })
        } catch (e) {
            return res.status(500).json({ msg: e.message })
        }
    },
    put: async (req, res) => {
        try {
            const { productId, name, description, price } = req.body;
            await Product.findByIdAndUpdate(req.params.id, { productId, name, description, price })

            return res.status(200).json({ msg: 'Product updated' })
        } catch (e) {
            return res.status(500).json({ msg: e.message })
        }
    }
}