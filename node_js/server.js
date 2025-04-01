const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const logger = require('morgan');
const cors = require('cors');

const users = require('./routes/userRoutes');

const port = process.env.PORT || 3000;
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.disable('x-powered-by');

app.set('port', port);

users(app);

server.listen(3000, '10.1.205.130' || 'localhost', function(){
  console.log('Aplicación de node.js ' + process.pid + ' inicio en el puerto ' + port);
});

app.get('/', (req, res) => {
  res.send('Ruta raíz del Backend');
});

app.use((err, req, resp, next) => {
  console.log(err);
  res.status(err.status || 500).send(err.stack);
});