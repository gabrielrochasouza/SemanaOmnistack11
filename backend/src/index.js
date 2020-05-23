const express = require('express');
const cors = require('cors');

const routes = require('./routes');
// './' para indicar que é um arquivo

const app = express();

app.use(cors());

app.use(express.json());
app.use(routes);


console.log('Esta rodando')

app.listen(3333);