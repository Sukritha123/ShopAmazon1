/// <reference types ="Cypress" />
describe('Todays Deals search', function () {
    before(function(){
        cy.fixture("example").then(function(data)
        {
            this.data=data
        }
        )
    })

    it('Search product, add proceed till payment is required', function () {
        cy.visit(Cypress.env('url') + "/");        //cy.visit("https://www.amazon.co.uk/");
        cy.contains('Continue without accepting').click();

        //sign in to Amazon account
        cy.login(this.data.email,this.data.password)

        //Click Today's Deals

        let count = 0;
        cy.get('div#nav-xshop a').each(($el, index, $list) => {
            const itemName = $el.text()
            if ((itemName.includes(this.data.topMenu_option)) && (count == 0)) {
                cy.wrap($el).click()
                count++
            }
        })

        //add to cart
        cy.get('div#slot-2').should('include.text', "Today's Deals")
        cy.get('div[data-testid="grid-deals-container"] div').eq(0).click()
        cy.get('div#octopus-dlp-asin-stream ul li').eq(0).click()
        cy.get('#add-to-cart-button').click()
        cy.get('#nav-cart').click()

        //checkout page
        cy.get('div.a-row.sc-cart-header div h1').should('include.text', 'Shopping Basket')
        cy.get('input[value="Proceed to checkout"]').click()
        cy.get('h1').should('include.text', 'Checkout')        
        cy.get('input[data-testid="Address_selectShipToThisAddress"]').click()

        //Verify payment
        cy.get('span.os-primary-action-button-text.buy-button-line-height').should('include.text', 'Use this payment method')
        cy.get('.a-section.pmts-add-credit-card-component-container div:nth-child(2)').should('include.text', 'Add a credit or debit card')

    })
})