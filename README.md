## Table of Contents
- [Installation](#installation)
- [Configuration](#configuration)
- [Running the Application](#running-the-application)
- [API Documentation](#api-documentation)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/your-repo-name.git
    cd your-repo-name
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Set up MongoDB:
    - Ensure you have MongoDB installed and running on your machine.
    - Create a `.env` file in the root directory and add your MongoDB URI:
      ```plaintext
      MONGODB_URI=mongodb://localhost:27017/your-database-name
      PORT=3000
      ```

## Configuration

- **MongoDB**: The MongoDB URI is configured in the `.env` file.
- **Port**: The application port is configured in the `.env` file.
- **Logging**: Logging is configured using Winston. Logs are written to the console and to a file named `error.log`.

## Running the Application

1. Start the server:
    ```bash
    npm start
    ```

2. The server should now be running at `http://localhost:3000`.

## API Documentation

API documentation is generated using Swagger and can be accessed at `http://localhost:3000/api-docs`.

### Adding API Documentation

To add new endpoints to the Swagger documentation, use JSDoc comments in your route files. For example:

```javascript
/**
 * @swagger
 * /categories:
 *   post:
 *     summary: Create a new category
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
 *                 example: Electronics
 *               parentCategory:
 *                 type: string
 *                 example: 60c72b2f9b1e8a3a2c8a9e5e
 *               filters:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     type:
 *                       type: string
 *                       example: color
 *                     name:
 *                       type: string
 *                       example: red
 *     responses:
 *       201:
 *         description: Category created successfully
 *       400:
 *         description: Bad request
 */
