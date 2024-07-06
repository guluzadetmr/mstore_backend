const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');
const dotenv = require('dotenv');
const routes = require('./routes');
const requestLogger = require('./middlewares/requestLogger');
const globalErrorHandler = require('./middlewares/globalErrorHandler');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./swaggerConfig');

dotenv.config();

// Connect to MongoDB
connectDB();
const cors = require('cors')

const app = express();
app.use(cors());


// Middleware
app.use(bodyParser.json());
app.use(requestLogger); // Add request logger middleware


// Swagger UI
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Routes
app.use('/api', routes);

// Error handler middleware
app.use(globalErrorHandler);

// Start the server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
})

module.exports = app;