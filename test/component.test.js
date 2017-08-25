import Vue from 'vue'
import TheMaskTemplate from '../src/component.vue'
import directive from '../src/directive'

var TheMaskComponent = Vue.extend(TheMaskTemplate)
var TheMaskInstance = new TheMaskComponent({propsData: {mask: '#.#'}}).$mount()
TheMaskInstance.value = '123'

test('null value should not throw error', () => {
  TheMaskInstance.value = null
})

test('directive should accept array', () => {
  directive({tagName: 'INPUT', dispatchEvent: function(){}}, {value: ['#.#', '##.#']})
})
