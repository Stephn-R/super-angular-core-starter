'use strict';

const ENV = process.env.ASPNETCORE_ENVIRONMENT;

switch(ENV) {
case 'dev':
case 'development':
  module.exports = require('./webpack/development');
  break;

case 'prod':
case 'production':
  module.exports = require('./webpack/production');
  break;

default:
  module.exports = require('./webpack/development');
  break;
}
