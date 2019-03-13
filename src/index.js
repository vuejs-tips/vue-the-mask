import tokens from "./tokens";
import mask from "./directive";
import TheMask from "./component.vue";
import dynamicMask from "./dynamic-mask";
import masker from "./masker";
import maskit from "./maskit";

function install(Vue) {
  Vue.component(TheMask.name, TheMask);
  Vue.directive("mask", mask);
}

export default install;
export { TheMask, mask, tokens, dynamicMask, masker, maskit };

// Install by default if included from script tag
if (typeof window !== "undefined" && window.Vue) {
  window.Vue.use(install);
}
