'use strict';

const express = require('express'),
      app     = express(),
      routes  = require('./routes');

app.use(routes);

module.exports = app;