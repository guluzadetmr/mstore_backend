const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const slugify = require('slugify');

const FilterSchema = new Schema({
  name: { type: String },
  type: { type: String },
  slug: { type: String }
}, { _id: false });

const CategorySchema = new Schema({
  name: { type: String, required: true },
  parentCategory: { type: Schema.Types.ObjectId, ref: 'Category', default: null },
  slug: { type: String, unique: true },
  filters: [FilterSchema] // Array of filter definitions
});

// Middleware to generate slug before saving category
CategorySchema.pre('save', function (next) {
  if (this.isModified('name')) {
    this.slug = slugify(this.name, { lower: true, strict: true });
  }
  // Slugify filter names
  this.filters.forEach(filter => {
    if ((filter.name && !filter.slug) || (filter.name && filter.isModified('name'))) {
      filter.slug = slugify(filter.name, { lower: true, strict: true });
    }
  });
  next();
});

const Category = mongoose.model('Category', CategorySchema);
module.exports = Category;