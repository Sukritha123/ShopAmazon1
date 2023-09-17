/// <reference types ="Cypress" />
describe('Text box search', function () {
    before(function(){
        cy.fixture("example").then(function(data)
        {
            this.data=data
        }
        )
    })

    it('Search - Fitbit Versa 4 Fitness Smartwatch, add and delete from cart', function () {
        cy.visit(Cypress.env('url') + "/");        //cy.visit("https://www.amazon.co.uk/");
        cy.contains('Continue without accepting').click();

        //sign in to Amazon account
        cy.login(this.data.email,this.data.password)

        //Type into textbox and search
        cy.get('#twotabsearchtextbox').type(this.data.textbox_Product)
        cy.get('#nav-search-submit-button').click()
        cy.get('div.a-section.a-spacing-none.s-messaging-widget-results-header div span').should('include.text','Results')

        //select the product from result table
        let clickCount = 0;
        cy.get('[data-component-type="s-search-result"]').find('span.a-size-medium.a-color-base.a-text-normal').each(($el, index, $list) => {
            const itemName = $el.text()
            if ((itemName.includes(this.data.textbox_Product)) && (clickCount == 0)) {
                cy.wrap($el).click()
                clickCount++
            }
        })

        //add to cart
        cy.get('span#productTitle').should('include.text', this.data.textbox_Product)
        cy.get('#add-to-cart-button').click()
        cy.contains(' No thanks ').click({ force: true })

        //delete from cart
        cy.get('#nav-cart').click()
        cy.get('div.a-row.sc-cart-header div h1').should('include.text', 'Shopping Basket')
        cy.get('[value="Delete"]').click({ multiple: true })

         //validate product deleted from cart       
        cy.get('div[data-action="delete"] span.a-size-base').should('include.text', ' was removed from Shopping Basket. ')
        cy.get('div.a-row.sc-cart-header div h1').should('include.text', 'Your Amazon Cart is empty.')

    })
})