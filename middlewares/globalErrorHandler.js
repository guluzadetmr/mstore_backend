const logger = require('../utils/logger');

const globalErrorHandler = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || 'error';

  const errorDetails = {
    message: err.message,
    method: req.method,
    url: req.originalUrl,
    ip: req.ip,
    stack: err.stack,
    errors: err.errors,
  };

  // Log the error details
  logger.error(errorDetails);

  res.status(err.statusCode).json({
    statusCode: err.statusCode,
    status: err.status,
    message: err.message,
    errors: err.errors || undefined,
  });
};

module.exports = globalErrorHandler;
