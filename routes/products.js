const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// @route GET /api/products
// @desc Get all products
/**
 * @swagger
 * /api/products:
 *   get:
 *     summary: Get all products
 *     description: Get all products
 *     tags: [Products]
 *     responses:
 *       200:
 *         description: The list of products
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 */
router.get('/', productController.getAllProducts);

// @route POST /api/products
// @desc Create new product
/**
 * @swagger
 * /api/products:
 *   post:
 *     summary: Creates a new product
 *     description: Creates a new product
 *     tags: [Products]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: The name of the product
 *                 example: "Laptop"
 *               price:
 *                 type: number
 *                 description: The price of the product
 *                 example: "1000"
 *               category:
 *                 type: string
 *                 description: The category of the product
 *                 example: "5f9e3d3d7e5e3d3d3d3d3d3d"
 *     responses:
 *       201:
 *         description: The product was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                   description: The id of the product
 *                   example: "5f9e3d3d7e5e3d3d3d3d3d3d"
 *                 name:
 *                   type: string
 *                   description: The name of the product
 *                   example: "Laptop"
 *                 price:
 *                   type: number
 *                   description: The price of the product
 *                   example: "1000"
 *                 category:
 *                   type: string
 *                   description: The category of the product
 *                   example: "5f9e3d3d7e5e3d3d3d3d3d3d"
 */
router.post('/', productController.createProduct);

module.exports = router;