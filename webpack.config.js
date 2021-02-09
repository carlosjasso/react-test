const path = require('path');

module.exports = {
  mode: "development",
  entry  : './cache/Index.js',
  output : {
    path     : path.resolve(__dirname, 'out/js'),
    filename : 'app.js'
  },
  externals : {
    "react"     : 'React',
    "react-dom" : 'ReactDOM'
  }
};