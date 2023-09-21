/// <reference types ="Cypress" />
import HomePage from '../../support/pageObjects/Homepage'
import ProductListpage from '../../support/pageObjects/ProductListpage.js'
import ProductPage from '../../support/pageObjects/Productpage.js'
import CartPage from '../../support/pageObjects/Cartpage.js'
import CartBasketPage from '../../support/pageObjects/CartBasketpage.js'

const homePage = new HomePage()
const productListpage = new ProductListpage()
const productPage = new ProductPage()
const cartPage = new CartPage()
const cartBasketPage = new CartBasketPage()

describe('Text box search', function () {
    before(function () {
        cy.fixture("example").then(function (data) {
            this.data = data
        })
    })

    it('Search - Fitbit Versa 4 Fitness Smartwatch, add and delete from cart', function () {
        cy.visit("https://www.amazon.co.uk/");

        //login in to Amazon account using Custom Commands
        cy.login(this.data.email, this.data.password);

        //Type into textbox and click search
        homePage.getTextBox().type(this.data.textbox_Product)
        homePage.getTextBoxSearchButton().click()

        //select the product from result table
        let clickCount = 0;
        productListpage.getProductNames().each(($el, index, $list) => {
            const itemName = $el.text()
            if ((itemName.includes(this.data.textbox_Product)) && (clickCount == 0)) {
                cy.wrap($el).click()
                clickCount++
            }
        })

        //add to cart
        productPage.getProductTitle().should('include.text', this.data.textbox_Product)
        productPage.getAddToCartButton().click()
        productPage.getNoThankstButton().click({ force: true })

        //delete from cart and validate product deleted from cart 
        cartPage.getBasketButton().click()
        cartBasketPage.getDeleteButton().click({ multiple: true })
        cartBasketPage.getDeleteConfirmText().should('include.text', ' was removed from Shopping Basket. ')

    })
})