const logger = require('../utils/logger');

const requestLogger = (req, res, next) => {
  logger.info(`Request Body: ${JSON.stringify(req.body)}`);
  next();
};

module.exports = requestLogger;
