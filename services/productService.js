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
exports.getProducts = async (page = 1, perPage = 15) => {
  const skip = (page - 1) * perPage;
  const products = await Product.find().sort({ createdAt: -1 }).skip(skip).limit(perPage);
  return products;
}

exports.getParentCategoryProducts = async (slug) => {
  const parentCategory = await categoryService.findCategoryBySlug(slug);
  return await Product.find({ category: parentCategory._id });
}

exports.createProduct = async (product) => {
  const newProduct = await Product.create(product);
  return newProduct;
}

