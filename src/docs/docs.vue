<template>
<div>
  <div class="ui form">
    <div class="ui dividing header">
    <div class="ui equal width grid" style="align-items: center">
       <div class="right aligned column">
         <h1 style="margin-bottom: 10px">raw</h1>
       </div>

       <div class="two wide column">
         <div class="switch__container">
           <input id="switch-shadow" class="switch switch--shadow" type="checkbox" v-model="masked">
           <label for="switch-shadow"></label>
         </div>
       </div>

       <div class="left aligned column">
         <h1 style="margin-bottom: 10px">masked</h1>
       </div>
    </div>
  </div>

    <div class="equal width fields">
      <field label="US Zip" mask="#####" value="12345" :masked="masked"></field>
      <field label="Brazil Zip" mask="#####-###" value="87010-230" :masked="masked"></field>
    </div>

    <div class="equal width fields">
      <field label="Brazil CPF" mask="###.###.###-##" value="12345678901" :masked="masked"></field>
      <field label="Brazil CNPJ" mask="##.###.###/####-##" value="27.865.757/0063-05" :masked="masked"></field>
    </div>

    <div class="equal width fields">
      <field label="US Phone" mask="+1 (###) ###-####" value="2025550134" :masked="masked"></field>
      <field label="Brazil Phone" mask="+55 (##) ####-####" value="4432211266" :masked="masked"></field>
    </div>

    <div class="equal width fields">
      <!-- <field label="IP Addr." mask="###.###.###.###" :masked="masked"></field> -->
      <field label="DateTime" mask="##/##/#### ##:##:##" value="04011981 060515" placeholder="dd/mm/yyyy hh:mm:ss" :masked="masked"></field>
      <field label="Credit Card" mask="#### #### #### ####" value="4916479938940351" :masked="masked"></field>
    </div>

    <div class="equal width fields">
      <field label="Date" mask="##/##/####" placeholder="dd/mm/yyyy" value="04011981" :masked="masked"></field>
      <field label="Time" mask="##:##:##" placeholder="hh:mm:ss" value="060515" :masked="masked"></field>
    </div>

    <div class="equal width fields">
      <field label="Br Car Plate" mask="AAA ####" value="IVY1703" :masked="masked" type="text"></field>
      <field label="Canada Zip" mask="S#S #S#" value="M5P 2N7" :masked="masked" type="text"></field>
    </div>
    <div class="equal width fields">
      <div class="field">
        <label>IBAN {{iban}}</label>
        <the-mask mask="AA## #### #### #### #### #### ###" v-model="iban" :masked="masked"></the-mask>
      </div>

      <div class="field">
        <label>Vehicle Identification {{vehicle}}</label>
        <the-mask mask="XX.XX.XXXXX.X.X.XXXXXX" v-model="vehicle" :masked="masked"></the-mask>
      </div>
    </div>

    <h4 class="ui dividing header">Dynamic Masks (Using Array)</h4>

    <div class="equal width fields">
      <div class="field">
        <p>
          <field label="CPF/CNPJ" :mask="['###.###.###-##', '##.###.###/####-##']" :masked="masked"></field>
        </p>
        <pre>&lt;the-mask :mask="['###.###.###-##', '##.###.###/####-##']" /&gt;</pre>
      </div>

      <div class="field">
        <p>
          <field label="Brazil 9th digit" :mask="['(##) ####-####', '(##) #####-####']" :masked="masked"></field>
        </p>
        <pre>&lt;the-mask :mask="['(##) ####-####', '(##) #####-####']" /&gt;</pre>
      </div>

    </div>

    <div class="equal width fields">
      <div class="field">
        <p>
          <field label="Bank Agency" :mask="['###', '###-#', '###-##']" :masked="masked"></field>
        </p>
        <pre>&lt;the-mask :mask="['###', '###-#', '###-##']" /&gt;</pre>
      </div>

      <div class="field">
        <p>
          <field label="Bank Account" :mask="['###-#', '####-#', '#####-#', '######-#']" :masked="masked"></field>
        </p>
        <pre>&lt;the-mask :mask="['###-#', '####-#', '#####-#', '######-#']" /&gt;</pre>
      </div>

    </div>

    <h4 class="ui dividing header">Custom Tokens (Creates token F to represent a hexadecimal [0-9A-F])</h4>

    <div>
      <field label="Hex. Color" mask="FFFFFF" :masked="masked" :tokens="hexTokens"></field>
      <pre>&lt;the-mask mask="FFFFFF" :tokens="hexTokens" /&gt;</pre>
      <pre>hexTokens: {
  F: {
    pattern: /[0-9a-fA-F]/,
    transform: v => v.toLocaleUpperCase()
  }
}</pre>
    </div>

    <h1 id="tokens">Tokens</h1>
    <pre>
    '#': {pattern: /\d/},
    'X': {pattern: /[0-9a-zA-Z]/},
    'S': {pattern: /[a-zA-Z]/},
    'A': {pattern: /[a-zA-Z]/, transform: v => v.toLocaleUpperCase()},
    'a': {pattern: /[a-zA-Z]/, transform: v => v.toLocaleLowerCase()},
    '!': {escape: true}
    </pre>

    <h1>Try it now</h1>
    <div class="equal width fields">

      <div class="field">
        <label>masked</label>
        <div class="switch__container small" style="margin: 0">
          <input id="switch-shadow" class="switch switch--shadow" type="checkbox" v-model="masked">
          <label for="switch-shadow"></label>
        </div>
      </div>

      <div class="field">
        <label>mask</label>
        <input v-model="mask" />
      </div>

      <div class="field">
        <label>value</label>
        <input v-model="value" />
      </div>

      <div class="field">
        <label>placeholder</label>
        <input v-model="placeholder" />
      </div>

      <div class="field">
        <label>type</label>
        <select v-model="type">
          <option>text</option>
          <option>tel</option>
        </select>
      </div>
    </div>
    <div class="field">
      <label>Test your input mask below</label>
      <the-mask :mask="mask" :value="value" :type="type" :masked="masked" :placeholder="placeholder"></the-mask>
    </div>
    <pre>{{code}}</pre>

    <h2>Directive Usage</h2>

    <div class="field" v-mask="'##/##/####'">
      <input type="tel" placeholder="dd/mm/yyyy" />
    </div>
    <pre>{{directive}}</pre>

    <div class="ui tertiary inverted red segment">
      The value returned from directive is always masked!
    </div>

    <div class="ui tertiary inverted orange segment">
      When possible, prefer to use input type="tel" to avoid glitch on android devices
    </div>
  </div>
</div>
</template>

<script>
import Field from './field'
import TheMask from '../component'
import mask from '../directive'

export default {
  components: {Field, TheMask},
  data () {
    return {
      masked: false,
      iban: 'BR0500000000011870000713973C1',
      vehicle: 'KNDJB723025140702',
      hexTokens: {
        F: {
          pattern: /[0-9a-fA-F]/,
          transform: v => v.toLocaleUpperCase()
        }
      },
      type: 'text',
      placeholder: 'test your mask here',
      mask: '#XSAa',
      value: '12TgB',
      directive: `<input type="tel" v-mask="'##/##/####'" />`
    }
  },
  computed: {
    code () {
      return `<the-mask mask="${this.mask}" value="${this.value}" type="${this.type}" masked="${this.masked}" placeholder="${this.placeholder}"></the-mask>`
    }
  },
  directives: {mask}
}
</script>

<style src="./style.css"></style>
<style src="./ios-switch.css"></style>
