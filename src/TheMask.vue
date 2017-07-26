<template>
  <input :type="type" @input="refresh($event.target.value)" :placeholder="placeholderOrMask">
</template>

<script>
/*
TODO não avançar o cursor pro fim, se pressionar um caracter que não pertence na mascara
*/
import maskit from './maskit'
import dynamicMask from './dynamic-mask'
import tokens from './tokens'

export default {
  name: 'TheMask',
  props: {
    value: String,
    mask: {
      type: [String, Function, Array],
      required: true
    },
    masked: { // by default emits the value unformatted, change to true to format with the mask
      type: Boolean,
      default: false // raw
    },
    placeholder: {
      type: String
    },
    type: {
      type: String,
      default: 'text'
    },
    tokens: {
      type: Object,
      default: () => tokens
    }
  },

  data: () => ({
    result: ''
  }),

  mounted () {
    this.refresh(this.value) // can't watch value immediate cause display access $el that doesn't exists before mounted
  },

  watch: {
    value (newValue) {
      newValue = (newValue === null || newValue === undefined) ? '' : newValue
      if (newValue === this.result) return // don't update if value is the same as last value
      this.refresh(newValue)
    },

    mask () {
      this.refresh(this.getDisplay())
    },

    masked () {
      this.refresh(this.getDisplay())
    },
  },

  computed: {
    placeholderOrMask () {
      if (this.placeholder === undefined || this.placeholder === null) {
        return (typeof this.convertedMask === 'function') ? '' : this.convertedMask
      } else {
        return this.placeholder
      }
    },

    convertedMask () {
      return Array.isArray(this.mask) ? dynamicMask(maskit, this.mask, this.tokens) : this.mask
    },

    masker () {
      return (typeof this.convertedMask === 'function') ? this.convertedMask : maskit
    }
  },

  methods: {
    refresh (newValue = '') {
      var position = this.getPosition() // save position before setDisplay
      var oldDisplay = this.getDisplay()
      this.setDisplay(this.masker(newValue, this.convertedMask, true, this.tokens)) // set display with mask, cursor goes to end
      var oldResult = this.result
      this.result = this.masker(newValue, this.convertedMask, this.masked, this.tokens) // emit masked or raw
      if (oldResult != this.result || oldDisplay != this.getDisplay()) { // emit only if changed
        this.$emit('input', this.result)
        var subNewValue = newValue.substring(0, position)
        var subDisplay = this.getDisplay().substring(0, position)
        if (subNewValue !== subDisplay) {
          var digit = subNewValue[position-1] // fix double char position bug: (44| + 9 => (44) 9|
          while (position < this.getDisplay().length // avoid infinite loop
                 && this.getDisplay().charAt(position-1) !== digit) {
            position++
          }
        }
      }
      this.setPosition(position)
    },

    // used only for asserting the cursor position during e2e tests
    emitCursor () {
      this.$emit('cursor', this.getPosition())
    },

    // can't use computed because vue caches it
    getPosition () { return (this.$el && this.$el.selectionEnd) || 0 },
    setPosition (p) {
      // update cursor only if the input has focus
      if (this.$el === document.activeElement) {
        this.$el.setSelectionRange(p, p);
        this.emitCursor()
      }
    },
    getDisplay () { return (this.$el && this.$el.value) || '' },
    setDisplay (v) { this.$el.value = v }
  }
}
</script>
