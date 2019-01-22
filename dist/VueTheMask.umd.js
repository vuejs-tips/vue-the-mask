(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["VueTheMask"] = factory();
	else
		root["VueTheMask"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "wmdO");
/******/ })
/************************************************************************/
/******/ ({

/***/ "FsIF":
/***/ (function(module, exports, __webpack_require__) {

// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  let i
  if ((i = window.document.currentScript) && (i = i.src.match(/(.+\/)[^/]+\.js$/))) {
    __webpack_require__.p = i[1] // eslint-disable-line
  }
}


/***/ }),

/***/ "wmdO":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: /home/neves/.config/yarn/global/node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
var setPublicPath = __webpack_require__("FsIF");

// CONCATENATED MODULE: ./src/tokens.js
/* harmony default export */ var src_tokens = ({
  '#': {
    pattern: /\d/
  },
  X: {
    pattern: /[0-9a-zA-Z]/
  },
  S: {
    pattern: /[a-zA-Z]/
  },
  A: {
    pattern: /[a-zA-Z]/,
    transform: v => v.toLocaleUpperCase()
  },
  a: {
    pattern: /[a-zA-Z]/,
    transform: v => v.toLocaleLowerCase()
  },
  '!': {
    escape: true
  } // https://github.com/fernandofleury/vanilla-masker/blob/master/lib/vanilla-masker.js
  // DIGIT = "9",
  // ALPHA = "A",
  // ALPHANUM = "S"
  // https://github.com/niksmr/vue-masked-input
  // 1 - number
  // a - letter
  // A - letter, forced to upper case when entered
  // * - alphanumeric
  // # - alphanumeric, forced to upper case when entered
  // + - any character
  // https://github.com/probil/v-mask
  // #	Number (0-9)
  // A	Letter in any case (a-z,A-Z)
  // N	Number or letter
  // X	Any symbol
  // https://github.com/igorescobar/jQuery-Mask-Plugin/blob/master/src/jquery.mask.js#L518
  // '0': {pattern: /\d/},
  // '9': {pattern: /\d/, optional: true},
  // '#': {pattern: /\d/, recursive: true},
  // 'A': {pattern: /[a-zA-Z0-9]/},
  // 'S': {pattern: /[a-zA-Z]/}
  // https://github.com/the-darc/string-mask
  // 0	Any numbers
  // 9	Any numbers (Optional)
  // #	Any numbers (recursive)
  // A	Any alphanumeric character
  // a	Any alphanumeric character (Optional) Not implemented yet
  // S	Any letter
  // U	Any letter (All lower case character will be mapped to uppercase)
  // L	Any letter (All upper case character will be mapped to lowercase)
  // $	Escape character, used to escape any of the special formatting characters.

});
// CONCATENATED MODULE: ./src/maskit.js
function maskit(value, mask, masked = true, tokens) {
  value = value || '';
  mask = mask || '';
  var iMask = 0;
  var iValue = 0;
  var output = '';

  while (iMask < mask.length && iValue < value.length) {
    var cMask = mask[iMask];
    var masker = tokens[cMask];
    var cValue = value[iValue];

    if (masker && !masker.escape) {
      if (masker.pattern.test(cValue)) {
        output += masker.transform ? masker.transform(cValue) : cValue;
        iMask++;
      }

      iValue++;
    } else {
      if (masker && masker.escape) {
        iMask++; // take the next mask char and treat it as char

        cMask = mask[iMask];
      }

      if (masked) output += cMask;
      if (cValue === cMask) iValue++; // user typed the same char

      iMask++;
    }
  } // fix mask that ends with a char: (#)


  var restOutput = '';

  while (iMask < mask.length && masked) {
    var cMask = mask[iMask];

    if (tokens[cMask]) {
      restOutput = '';
      break;
    }

    restOutput += cMask;
    iMask++;
  }

  return output + restOutput;
}
// CONCATENATED MODULE: ./src/dynamic-mask.js
function dynamicMask(maskit, masks, tokens) {
  masks = masks.sort((a, b) => a.length - b.length);
  return function (value, mask, masked = true) {
    var i = 0;

    while (i < masks.length) {
      var currentMask = masks[i];
      i++;
      var nextMask = masks[i];

      if (!(nextMask && maskit(value, nextMask, true, tokens).length > currentMask.length)) {
        return maskit(value, currentMask, masked, tokens);
      }
    }

    return ''; // empty masks
  };
}
// CONCATENATED MODULE: ./src/masker.js

 // Facade to maskit/dynamicMask when mask is String or Array

/* harmony default export */ var masker = (function (value, mask, masked = true, tokens) {
  return Array.isArray(mask) ? dynamicMask(maskit, mask, tokens)(value, mask, masked, tokens) : maskit(value, mask, masked, tokens);
});
// CONCATENATED MODULE: ./src/directive.js

 // https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Creating_and_triggering_events#The_old-fashioned_way

function directive_event(name) {
  var evt = document.createEvent('Event');
  evt.initEvent(name, true, true);
  return evt;
}

/* harmony default export */ var directive = (function (el, binding) {
  var config = binding.value;

  if (Array.isArray(config) || typeof config === 'string') {
    config = {
      mask: config,
      tokens: src_tokens
    };
  }

  if (el.tagName.toLocaleUpperCase() !== 'INPUT') {
    var els = el.getElementsByTagName('input');

    if (els.length !== 1) {
      throw new Error("v-mask directive requires 1 input, found " + els.length);
    } else {
      el = els[0];
    }
  }

  el.oninput = function (evt) {
    if (!evt.isTrusted) return; // avoid infinite loop

    /* other properties to try to diferentiate InputEvent of Event (custom)
    InputEvent (native)
      cancelable: false
      isTrusted: true
       composed: true
      isComposing: false
      which: 0
     Event (custom)
      cancelable: true
      isTrusted: false
    */
    // by default, keep cursor at same position as before the mask

    var position = el.selectionEnd; // save the character just inserted

    var digit = el.value[position - 1];
    el.value = masker(el.value, config.mask, true, config.tokens); // if the digit was changed, increment position until find the digit again

    while (position < el.value.length && el.value.charAt(position - 1) !== digit) {
      position++;
    }

    if (el === document.activeElement) {
      el.setSelectionRange(position, position);
      setTimeout(function () {
        el.setSelectionRange(position, position);
      }, 0);
    }

    el.dispatchEvent(directive_event('input'));
  };

  var newDisplay = masker(el.value, config.mask, true, config.tokens);

  if (newDisplay !== el.value) {
    el.value = newDisplay;
    el.dispatchEvent(directive_event('input'));
  }
});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/component.vue
//
//
//
//



/* harmony default export */ var component = ({
  name: 'TheMask',
  props: {
    value: [String, Number],
    mask: {
      type: [String, Array],
      required: true
    },
    masked: {
      // by default emits the value unformatted, change to true to format with the mask
      type: Boolean,
      default: false // raw

    },
    tokens: {
      type: Object,
      default: () => src_tokens
    }
  },
  directives: {
    mask: directive
  },

  data() {
    return {
      lastValue: null,
      // avoid unecessary emit when has no change
      display: this.value
    };
  },

  watch: {
    value(newValue) {
      if (newValue !== this.lastValue) {
        this.display = newValue;
      }
    },

    masked() {
      this.refresh(this.display);
    }

  },
  computed: {
    config() {
      return {
        mask: this.mask,
        tokens: this.tokens,
        masked: this.masked
      };
    }

  },
  methods: {
    onInput(e) {
      if (e.isTrusted) return; // ignore native event

      this.refresh(e.target.value);
    },

    refresh(value) {
      this.display = value;
      var value = masker(value, this.mask, this.masked, this.tokens);

      if (value !== this.lastValue) {
        this.lastValue = value;
        this.$emit('input', value);
      }
    }

  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-1d380615","hasScoped":false,"optionsId":"1","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/component.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('input',{directives:[{name:"mask",rawName:"v-mask",value:(_vm.config),expression:"config"}],attrs:{"type":"text"},domProps:{"value":_vm.display},on:{"input":_vm.onInput}})}
var staticRenderFns = []

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/component-normalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  scriptExports = scriptExports || {}

  // ES6 modules interop
  var type = typeof scriptExports.default
  if (type === 'object' || type === 'function') {
    scriptExports = scriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./src/component.vue
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = normalizeComponent(
  component,
  render,
  staticRenderFns,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var src_component = (Component.exports);

// CONCATENATED MODULE: ./src/index.js




function install(Vue) {
  Vue.component(src_component.name, src_component);
  Vue.directive('mask', directive);
}

/* harmony default export */ var src = (install);
 // Install by default if included from script tag

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(install);
}
// CONCATENATED MODULE: /home/neves/.config/yarn/global/node_modules/@vue/cli-service/lib/commands/build/entry-lib.js
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "TheMask", function() { return src_component; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "mask", function() { return directive; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "tokens", function() { return src_tokens; });


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (src);



/***/ })

/******/ })["default"];
});
//# sourceMappingURL=VueTheMask.umd.js.map