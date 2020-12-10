'use strict';

// Logger Middleware
module.exports = (req, res, next) => {
  console.log(`Request: ${req.method} Path: ${req.path}`);
  next();
};
