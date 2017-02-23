// ────────────────────────────────────────────────────────────────────────────────
// MODULES

const path = require('path');
const merge = require('webpack-merge');
const WebpackMd5Hash = require('webpack-md5-hash');

const common = require('./common');

// ────────────────────────────────────────────────────────────────────────────────
module.exports = merge(common, {
  plugins: [
    new WebpackMd5Hash(),
  ],
});
