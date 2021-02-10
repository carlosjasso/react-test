const path = require('path');

module.exports = {
  mode: "development",
  entry  : './cache/App.js',
  output : {
    path     : path.resolve(__dirname, 'out/js'),
    filename : 'app.js'
  }
};