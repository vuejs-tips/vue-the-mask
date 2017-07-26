import Vue from 'vue'
import TheMaskTemplate from '../src/TheMask.vue'
var TheMaskComponent = Vue.extend(TheMaskTemplate)
var TheMaskInstance = new TheMaskComponent({propsData: {mask: '#.#'}}).$mount()
TheMaskInstance.value = '123'

test('null value should not throw error', () => {
  TheMaskInstance.value = null
})
