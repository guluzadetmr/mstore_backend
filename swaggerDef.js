const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'Mstore API',
    version: '1.0.0'
  },
  servers: [
    {
      url: 'http://localhost:5001',
      description: 'Development server',
    },
  ],
};

module.exports = swaggerDefinition;
