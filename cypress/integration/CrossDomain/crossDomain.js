/// <reference types ="Cypress" />
import Commitquality from '../../support/pageObjects/Commitquality'
const commitquality = new Commitquality()

describe('Test Suit for Cross Domain', function () {

    it('Test for Cross Domain', function () {
        cy.visit("https://commitquality.com/");

        commitquality.getTFilterTextBox().type("Test")
        commitquality.getTFilterButton().click()
        commitquality.getTTextMsg().should('include.text','No products found')
        commitquality.getTResetButton().click()
        commitquality.getTTextMsg().should('not.exist')

        cy.visit("https://www.npmjs.com");  //visit a secondary domain and perform test
        cy.origin("https://www.npmjs.com",()=> {
            const Npmpage = Cypress.require('../../support/pageObjects/Npmpage')
            const NpmPropage = Cypress.require('../../support/pageObjects/NpmPropage')
            const npmpage = new Npmpage()
            const npmpropage = new NpmPropage()

            npmpage.getPageURL().should('eq', 'https://www.npmjs.com/')
            npmpage.getHeadline().should('include.text','Build amazing things')
            npmpage.getTabPro().click()
            npmpropage.getProPageURL().should('include', '/products/pro')
        })

        cy.visit("https://commitquality.com/"); //return to primary domain and continue test
        commitquality.getTableRows().should('have.length',10)
        commitquality.getShowMoreButton().click()
        commitquality.getTableRows().should('have.length',11)

        


    })
})