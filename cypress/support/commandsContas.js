import loc from './locators' 

Cypress.Commands.add('acessaMenuConta', () => {
    cy.get(loc.MENU.SETTINGS).click();
    cy.get(loc.MENU.CONTAS).click();
})
Cypress.Commands.add('InserirConta', conta => {
    cy.get(loc.CONTAS.NOME).type(conta);
    cy.get(loc.CONTAS.BTN_SALVAR).click();
})


