const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'category',
        required: true
    },

    name: {
        type: String,
        required: true
    },

    price: {
        type: Number,
        required: true
    },

    sales: {
        type: Number
    },

    popularity: Number,

    availableStock: {
        type: Number,
        default: 0
    },

    status: {
        type: String,
        enum: ['available', 'out-of-stock', 'coming-soon'],
        default: 'available'
    }
})

module.exports = mongoose.model('product', productSchema);