<template>
<div>
  <the-mask type="tel" placeholder="cpf" v-model="input" :mask="masks" :masked="masked" @input="log"></the-mask>
  <p>
    {{input}}
  </p>
  <p>
    <input v-model="input" />
  </p>
  <p>
    <input type="checkbox" v-model="masked" />
  </p>
  <p>
    <input v-model="mask" />
  </p>
</div>
</template>

<script>
import TheMask from '../src/component'

export default {
  components: {TheMask},
  data () {
    return {
      input: '654321',
      masked: true,
      mask: '+1 (##) # ##.###%'
    }
  },
  computed: {
    masks () {
      return this.mask.split('|')
    }
  },
  methods: {
    log (e) {
      // console.log('input', e)
    }
  }
}
</script>
