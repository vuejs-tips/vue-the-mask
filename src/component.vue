<template>
  <input
    type="text"
    v-mask="config"
    :value="display"
    v-bind="$attrs"
    v-on="listeners"
  />
</template>

<script>
import mask from './directive'
import tokens from './tokens'
import masker from './masker'

export default {
  name: 'TheMask',
  props: {
    value: [String, Number],
    mask: {
      type: [String, Array],
      required: true
    },
    masked: { // by default emits the value unformatted, change to true to format with the mask
      type: Boolean,
      default: false // raw
    },
    tokens: {
      type: Object,
      default: () => tokens
    }
  },
  directives: {mask},
  data () {
    return {
      lastValue: null, // avoid unecessary emit when has no change
      display: this.value
    }
  },
  watch : {
    value (newValue) {
      if (newValue !== this.lastValue) {
        this.display = newValue
      }
    },
    masked () {
      this.refresh(this.display)
    }
  },
  computed: {
    config () {
      return {
        mask: this.mask,
        tokens: this.tokens,
        masked: this.masked
      }
    },
    listeners () {
      var vm = this
      return Object.assign({},
        vm.$listeners,
        {
          input(e) {
            vm.onInput(e)
          }
        }
      )
    }
  },
  methods: {
    onInput (e) {
      if (e.isTrusted) return // ignore native event
      this.refresh(e.target.value)
    },

    refresh (value) {
      this.display = value
      var value = masker(value, this.mask, this.masked, this.tokens)
      if (value !== this.lastValue) {
        this.lastValue = value
        this.$emit('input', value)
      }
    }
  }
}
</script>
