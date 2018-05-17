const PATH = '/test/index.html'

describe('dist build test', function() {
  it('loads VueTheMask at window', function() {
    const o = { delay: 1000 }
    cy
      .visit(PATH)
      .get('#input')
      .type('0{leftarrow}12{leftarrow}{backspace}98', o)
      .then(input => console.log(input.get(0)))
    // .should('have.value', '+1 0')
    // .should('have.value', '+1 02')
    // .type('3', o)
    // .should('have.value', '+1 02.3')
    // .type('{backspace}', o)
    // .should('have.value', '+1 02.')
    // .type('1{leftarrow}2{leftarrow}3', o)
    // .type('56{uparrow}0', o)
    // .should('have.value', '+1 03.42')
    // .get('#cursor')
    // .should('have.text', '7')
  })
})
