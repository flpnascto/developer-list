const express = require('express');
const swaggerUI = require('swagger-ui-express');
const specs = require('./config/swaggerSpecs');
const routes = require('./routes');
const errorController = require('./controllers/errorController');
require('dotenv').config();

const { PORT } = process.env;

const app = express();
app.use(express.json());

app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(specs));

app.listen(PORT, () => console.log('ouvindo porta 3000!'));

app.get('/', (_request, response) => {
  response.send('Olá');
});

app.use('/', routes);
app.use(errorController);
