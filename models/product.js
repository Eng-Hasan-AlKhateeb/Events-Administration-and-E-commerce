const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true, minlength: 5, maxlength: 100 },
  relatedCompany: { type: mongoose.Schema.Types.ObjectId, ref: 'Company' },
  manufacturerCompany: { type: String },
  price: { type: Number },
  priceOnSale: { type: Number },
  rate: { type: Number, default: 0 },
  ratedBy: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  numRating: { type: Number, default: 0 },
  type: { type: String },
  guarantee: { type: String, default: 'No guarantee presented' },
  imgUrls: { type: [String] },
  sizes: { type: [{ type: String, enum: ['S', 'M', 'L', 'XL', 'XXL'] }] },
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;