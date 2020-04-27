// Express Server
// FIX ME :(
  const express = require('express');
  const path = require('path');
  const router = require('./router');
  const bodyparser= require('body-parser');
  const morgan =require('morgan');


  const port = 3000;
  const server = express();

  server.use(morgan('dev'));
  server.use(bodyparser.json());
  server.use(bodyparser.urlencoded({extended: true}));

  server.use(express.static(path.join(__dirname + '/../client/dist')));

  server.use('/', router);

  server.listen(port, () => console.log('Connected to port: 3000'))