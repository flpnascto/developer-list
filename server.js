const express = require('express');
const routes = require('./routes');

const app = express();
app.use(express.json());

app.listen(3000, () => console.log('ouvindo porta 3000!'));

app.get('/', (_request, response) => {
  response.send('Olá');
});

app.use('/', routes);
