const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const slugify = require('slugify');

const ProductSchema = new Schema({
  name: { type: String, required: true },
  slug: { type: String, unique: true },
  price: { type: Number, required: true },
  category: { type: Schema.Types.ObjectId, ref: 'Category', required: true },
  description: { type: String },
  images: [{ type: String, required: true }],
  specs: { type: Map, of: String }, // Flexible structure for specifications
}, { timestamps: true });

// Middleware to generate slug when product name is modified
ProductSchema.pre('save', function (next) {
  if (this.isModified('name')) {
    this.slug = slugify(this.name, { lower: true, strict: true });
  }
  next();
})

const Product = mongoose.model('Product', ProductSchema);
module.exports = Product;