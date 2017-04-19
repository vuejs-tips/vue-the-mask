const tokens = require('./tokens')
const TheMask = require('./TheMask.vue')

const Component = {
  tokens,
  TheMask,
  install: Vue => Vue.component(TheMask.name, TheMask),
  version: proccess.env.VERSION
}

module.exports = Component

// Install by default if included from script tag
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(Component)
}
