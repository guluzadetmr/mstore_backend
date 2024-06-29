const categoryService = require('../services/categoryService');
const AppError = require('../utils/AppError');

exports.getAllCategories = async (req, res, next) => {
  try {
    const categories = await categoryService.getAllCategories();
    res.json(categories);
  } catch (error) {
    next(new AppError(error.message, 500));
  }
}

exports.createCategory = async (req, res, next) => {
  try {
    const newCategory = await categoryService.createCategory(req.body);
    res.status(201).json(newCategory);
  } catch (error) {
    next(new AppError(error.message, 400)); // Pass error to global error handler
  }
};

exports.getDistinctSpecs = async (req, res, next) => {
  try {
    const specs = await categoryService.getDistinctSpecs(req.params.categorySlug);
    res.json(specs);
  } catch (error) {
    next(new AppError(error.message, 500));
  }
}