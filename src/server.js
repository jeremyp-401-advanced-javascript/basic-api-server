'use strict';

// Create an Express server instance named 'app'
const express = require('express');
const app = express();

// Localize Middleware Modules
const logger = require('./middleware/logger');
const notFoundHandler = require('./error-handler/404');
const serverErrorHandler = require('./error-handler/500');
const drinkRoutes = require('./routes/drink-routes');
const tacoRoutes = require('./routes/taco-routes');

// Attach Middleware
app.use(express.json());
app.use(logger);
app.use(tacoRoutes);
app.use(drinkRoutes);

app.post('/test', (req, res, next) => {
  res.status(200).send(req.body);
});

// TODO: Does it at least start? Remove once creating routes.
app.get('/pol', proofOfLifeHandler);

function proofOfLifeHandler(req, res, next){
  res.status(200).send('Well... It at least does this...');
}

// TODO: What's missing? Probably nothing, but I should double check.

app.use('*', notFoundHandler);
app.use(serverErrorHandler);

module.exports = {
  server: app, // Used by testing
  start: port => { // Takes port from index.js, starts server.
    if(!port) { throw new Error('missing port');}
    app.listen(port, () => {
      console.log(`listening on ${port}`);
    });
  },
};