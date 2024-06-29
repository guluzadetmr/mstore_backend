const productService = require('../services/productService');
const AppError = require('../utils/AppError');

exports.getAllProducts = async (req, res, next) => {
  try {
    const products = await productService.getAllProducts();
    res.json(products);
  } catch (error) {
    next(new AppError(error.message, 500));
  }
}

exports.getProducts = async (req, res, next) => {
  try {
    const products = await productService.getProducts(req.query.page, req.query.perPage);
    res.json(products);
  } catch (error) {
    next(new AppError(error.message, 500));
  }
}

exports.createProduct = async (req, res, next) => {
  try {
    const newProduct = await productService.createProduct(req.body);
    res.status(201).json(newProduct);
  } catch (error) {
    next(new AppError(error.message, 400));
  }
}