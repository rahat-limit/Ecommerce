const { Schema, model } = require('mongoose')

const productSchema = new Schema({
    productId: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    name: {
        type: String,
        trim: true,
        required: true
    },
    price: {
        type: Number,
        trim: true,
        required: true
    },
    description: {
        type: String,
        trim: true,
        required: true
    },
    sold: {
        type: Number,
        default: 0
    },
    checked: {
        type: Boolean,
        default: false
    },
    images: {
        type: Object,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    
})

module.exports = model('Product', productSchema)