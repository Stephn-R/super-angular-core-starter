// ────────────────────────────────────────────────────────────────────────────────
// MODULES

const path = require('path');
const merge = require('webpack-merge');

const common = require('./common');

// ────────────────────────────────────────────────────────────────────────────────
module.exports = merge(common, {
  plugins: []
});
