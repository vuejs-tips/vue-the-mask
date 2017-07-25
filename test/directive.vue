<template>
<div>
  <input type="text" v-mask="'+1 (##) # ####-####)'" v-model="input" /> {{input}}
  <br />
  <input type="text" v-model="input" />
</div>
</template>

<script>
import mask from '../src/directive'
export default {
  data () {
    return {
      input: '12'
    }
  },
  directives: {mask}
}
</script>
