const path = require('path')

module.exports = {
  babel: {
    babelrc: false,
  },
  html: {
    template: path.resolve(__dirname, './layout.html')
  },
  webpack: {
    devtool: false, // disable source-map
    output: {
      publicPath: '', // generate client.*.js relative to ./demo/index.html
    }
  }
}
