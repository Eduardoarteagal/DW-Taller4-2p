const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const suscriptoresRouter = require('./routes/suscriptores');

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(bodyParser.urlencoded({ extended: true }));
app.use('/suscriptores', suscriptoresRouter);

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});