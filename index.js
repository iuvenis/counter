'use strict';

const app  = require('./app'),
      PORT = process.env.PORT || 3000;

const server = app.listen(PORT, () => {
    console.log(`Server started listening on port ${PORT}`);
  });