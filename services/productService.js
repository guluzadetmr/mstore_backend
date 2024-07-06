const Category = require('../models/category');
const Product = require('../models/product');
const categoryService = require('./categoryService');

exports.getAllProducts = async () => {
  return await Product.find();
}

/**
 * Retrieves products with pagination.
 *
 * @param {number} page - The page number for pagination (default is 1)
 * @param {number} perPage - The number of products per page (default is 15)
 * @return {Promise} An array of products based on pagination settings
 */

exports.getCategoryProducts = async (categorySlug, page = 1, perPage = 15) => {
  const category = await categoryService.findCategoryBySlug(categorySlug);

  if (!category) {
    throw new Error('Category not found');
  }
  const skip = (page - 1) * perPage;
  if (!category.parentCategory) { // if category is not a sub-category (is a main category)
    const subCategories = await categoryService.findSubCategoriesByParentCategoryId(category._id);
    return await Product.find({ category: { $in: subCategories.map(s => s._id) } }).
      sort({ createdAt: -1 }).skip(skip).limit(perPage);
  }
  return await Product.find({ category: category._id }).
    sort({ createdAt: -1 }).skip(skip).limit(perPage);
}

exports.createProduct = async (product) => {
  const newProduct = await Product.create(product);
  return newProduct;
}