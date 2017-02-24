'use strict';

const ENV = process.env.ASPNETCORE_ENVIRONMENT;

switch(ENV) {
case 'dev':
case 'development':
  module.exports = require('./Webpack/development');
  break;

case 'prod':
case 'production':
  module.exports = require('./Webpack/production');
  break;

default:
  module.exports = require('./Webpack/development');
  break;
}
