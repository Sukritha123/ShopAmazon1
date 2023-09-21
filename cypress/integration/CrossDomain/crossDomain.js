/// <reference types ="Cypress" />
import Commitquality from '../../support/pageObjects/Commitquality'
const commitquality = new Commitquality()

describe('Test Suit for Cross Domain', function () {

    it('Test for Cross Domain', function () {
        cy.visit("https://commitquality.com/");

        commitquality.getTFilterTextBox().type("Test")
        commitquality.getTFilterButton().click()
        commitquality.getTTextMsg().should('include.text', 'No products found')
        commitquality.getTResetButton().click()
        commitquality.getTTextMsg().should('not.exist')

        cy.visit("https://www.demoblaze.com/");  //visit a secondary domain and perform test
        cy.origin("https://www.demoblaze.com/", () => {
            const Demoblazepage = Cypress.require('../../support/pageObjects/Demoblazepage')
            const demoblazepage = new Demoblazepage()

            demoblazepage.getPageURL().should('eq', 'https://www.demoblaze.com/')
            demoblazepage.getTabContact().click()
            demoblazepage.getContactModalTitle().should('have.text', 'New message')
            demoblazepage.getContactModalTextbox().type('Test')
            demoblazepage.getContactModalSendBtn().click()
            cy.on('window:alert', (str) =>  //Capture window alert message and validate 
            {
                expect(str).to.equal('Thanks for the message!!')
            })
        })

        cy.visit("https://commitquality.com/"); //return to primary domain and continue test
        commitquality.getTableRows().should('have.length', 10)
        commitquality.getShowMoreButton().click()
        commitquality.getTableRows().should('have.length', 11)




    })
})