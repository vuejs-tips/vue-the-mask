const tokens = require('./tokens')
const TheMask = require('./TheMask.vue')

TheMask.tokens = tokens
TheMask.install = Vue => Vue.component(TheMask.name, TheMask)
TheMask.version = proccess.env.VERSION

module.exports = TheMask

// Install by default if included from script tag
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(TheMask)
}
