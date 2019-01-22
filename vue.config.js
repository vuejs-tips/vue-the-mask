module.exports = {
  productionSourceMap: false,
  configureWebpack: {
    output: {
      globalObject: "typeof self !== 'undefined' ? self : this"
    }
  }
}
