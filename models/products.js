const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
  {
    storeId: { type: String, required: true },
    storeName: { type: String, required: true },
    productId: { type: String, required: true, unique: true },
    productName: { type: String, required: true },
    price: { type: Number, required: true }
  },
  { timestamps: true }
);

module.exports = mongoose.model('Product', productSchema);