describe('Jornadas de usuário', () => {
    it('Deve permitir que o usuário acesse a aplicação, realize uma transação e faça logout', () => {
    cy.visit('/')

    // Clica no botão de login
    cy.getByData('botao-login').click()
    cy.getByData('email-input').type('neilton@alura.com')
    cy.getByData('senha-input').type('123456')
    cy.getByData('botao-enviar').click()

    // Verifica se o usuário foi redirecionado para a página inicial (/home)
    cy.location('pathname').should('eq','/home')

    cy.getByData('select-opcoes').select('Transferência') 
    cy.getByData('form-input').type('80') 
    cy.getByData('realiza-transacao').click()
    cy.getByData('lista-transacoes').find('li').last().contains('- R$ 80')

    cy.getByData('select-opcoes').select('Depósito') 
    cy.getByData('form-input').type('80') 
    cy.getByData('realiza-transacao').click()
    cy.getByData('lista-transacoes').find('li').last().contains('R$ 80')


    cy.getByData('botao-sair').click()
    cy.location('pathname').should('eq','/')
})

})