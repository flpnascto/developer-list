require('dotenv').config();
const swaggerJsDoc = require('swagger-jsdoc');

const serverUrl = `http://${process.env.HOSTNAME}:${process.env.PORT}`;

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Developers List API',
      version: '1.0.0',
      description: 'Registration management of developer people.',
    },
    servers: [
      {
        url: serverUrl,
      },
    ],
  },
  apis: ['./routes/*.js', './models/*.js'],
};

module.exports = swaggerJsDoc(options);
