'use strict';

const express = require ('express');
const routes = require('./routes/tea'); // import the routes
const port = 3000;

const app = express();

app.use(express.json());

app.use('/', routes); //to use the routes

app.listen(port, () => {
    console.log(`Your app is listening on port  ${port}`)
});