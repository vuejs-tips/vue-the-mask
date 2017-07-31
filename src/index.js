const tokens = require('./tokens')
const Mask = require('./directive')
const TheMask = require('./component.vue')

TheMask.tokens = tokens
TheMask.mask = mask
TheMask.install = function (Vue) {
  Vue.component(TheMask.name, TheMask)
  Vue.directive('mask', mask)
}

TheMask.version = proccess.env.VERSION

module.exports = TheMask

// Install by default if included from script tag
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(TheMask)
}
