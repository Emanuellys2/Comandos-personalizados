describe('Página Inicial', () => {
beforeEach ( () => {
  cy.visit('http://localhost:3000')
})
  it('passes', () => {
    cy.getByData('titulo-principal').contains('Experimente mais liberdade no controle da sua vida financeira. Crie sua conta com a gente!')
  })
})