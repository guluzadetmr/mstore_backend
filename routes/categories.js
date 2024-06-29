const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/categoryController');

// @route GET /api/categories
// @desc Get all categories
/**
 * @swagger
 * /api/categories:
 *   get:
 *     summary: Get all categories
 *     description: Get all categories
 *     tags: [Categories]
 *     responses:
 *       200:
 *         description: The list of categories
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 */
router.get('/', categoryController.getAllCategories);

// @route POST /api/categories
// @desc Create new category
/**
 * @swagger
 * /api/categories:
 *   post:
 *     summary: Creates a new category
 *     description: Creates a new category
 *     tags: [Categories]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: The name of the category
 *                 example: "Computers"
 *               parentCategory:
 *                 type: string
 *                 example: "5f9e3d3d7e5e3d3d3d3d3d3d"
 *               filters:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     name:
 *                       type: string
 *                       example: "Processor"
 *                     type:
 *                       type: string
 *                       example: "string"
 *     responses:
 *       201:
 *         description: The category was successfully created
 *       400:
 *         description: The category could not be created
 */
router.post('/', categoryController.createCategory);


router.get('/filters/:categorySlug', categoryController.getDistinctSpecs);

module.exports = router;