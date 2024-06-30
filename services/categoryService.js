const Category = require('../models/category');
const Product = require('../models/product');

exports.getAllCategories = async () => {
  return await Category.find();
}

exports.createCategory = async (category) => {
  const newCategory = new Category(category);
  return await newCategory.save();
}

exports.findCategoryBySlug = async (slug) => {
  return await Category.findOne({ slug });
}

exports.findSubCategoriesByParentCategoryId = async (parentCategoryId) => {
  return await Category.find({ parentCategory: parentCategoryId });
}

exports.getDistinctSpecs = async (categorySlug) => {
  const category = await Category.findOne({ slug: categorySlug, parentCategory: { $ne: null } });

  if (!category) {
    throw new Error('Category not found');
  }


  const filters = category.filters;
  const specs = filters.map(filter => filter.slug);

  const aggregationPipeline = [
    { $match: { category: category._id } },
    {
      $group: {
        _id: null,
        ...specs.reduce((acc, spec) => {
          acc._id = null;
          acc[spec] = { $addToSet: `$specs.${spec}` };
          return acc;
        }, {}),
      }
    },
    {
      $project: {
        _id: 0,
        ...specs.reduce((acc, spec) => {
          acc[spec] = 1;
          return acc;
        }, {}),
      }
    }
  ];

  const aggregateResult = await Product.aggregate(aggregationPipeline).exec();
  const result = {
    filters,
    specs: aggregateResult[0]
  }
  return result;
}
