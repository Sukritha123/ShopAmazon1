// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a Login command --
 Cypress.Commands.add('login', (email, password) => { 
    cy.contains('Continue without accepting').click();
    cy.get('#nav-link-accountList').click()
    cy.contains('Sign in')
    cy.get('input#ap_email').type(email)
    cy.get('input#continue').click()
    cy.get('input#ap_password').type(password)
    cy.get('input#signInSubmit').click()
    //cy.get('input#ap-account-fixup-phone-skip-link').click() //skip phone number
  })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })