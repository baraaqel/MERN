const mongoose = require('mongoose');
const ProductSchema = new mongoose.Schema({
    productName: { type: String },
    productDescription: { type: String },
    productPrice: { type: Number }
}, { timestamps: true });
module.exports.Product = mongoose.model('Product', ProductSchema);
