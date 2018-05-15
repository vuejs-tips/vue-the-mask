import tokens from './tokens'
import mask from './directive'
import TheMask from './component.vue'

function install(Vue) {
  Vue.component(TheMask.name, TheMask)
  Vue.directive('mask', mask)
}

export default install
export { TheMask, mask, tokens }

// Install by default if included from script tag
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(install)
}
