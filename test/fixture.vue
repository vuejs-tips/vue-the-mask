<template>
<div>
  <the-mask ref="input" id="input" v-model="input" @input.native="cursor = $event.target.selectionEnd" mask="+1 ##.##.##) ##)"></the-mask>
  <div id="cursor">{{cursor}}</div>

  <label class="label">MaxLength 3 (não permite adição após preencher)</label>
  <input type="text" maxlength="3" class="input">

  <label class="label">IP Address {{ip}}</label>
  <the-mask v-model="ip" mask="###.###.###.###" masked class="input"></the-mask>

  <label class="label">Date {{date}}</label>
  <the-mask v-model="date" mask="##/##/####" placeholder="mm/dd/yyyy" class="input"></the-mask>

  <label class="label">Mask At End {{maskAtEnd}}</label>
  <the-mask v-model="maskAtEnd" mask="(##)" class="input"></the-mask>

  <hr>

  <h4 class="title is-4">Brazil Masks</h4>

  <label class="label">Phone {{phone}}</label>
  <the-mask id="phone" v-model="phone" mask="(##) #####-####" class="input"></the-mask>

  <label class="label">CEP {{cep}}</label>
  <the-mask v-model="cep" mask="#####-###" class="input"></the-mask>

  <label class="label">CPF {{cpf}}</label>
  <the-mask v-model="cpf" mask="###.###.###-##" masked class="input"></the-mask>

  <label class="label">CNPJ {{cnpj}}</label>
  <the-mask v-model="cnpj" mask="##.###.###/####-##" class="input"></the-mask>

  <label class="label">Placa {{placa}}</label>
  <the-mask v-model="placa" mask="XXX-####" class="input"></the-mask>
</div>
</template>

<script>
import TheMask from '../src/component'
export default {
  components: {TheMask},
  data: () => ({
    input: '',
    cursor: 0,
    ip: '',
    date: '',
    phone: '',
    cpf: '',
    cnpj: '',
    cep: '',
    placa: '',
    maskAtEnd: ''
  }),
  mounted () {
    window.input = this.$refs.input
  }
}
</script>
<style>
input {
  display: block;
  font-size: 30px;
  padding: 10px;
  font-family: monospace;
}
</style>
