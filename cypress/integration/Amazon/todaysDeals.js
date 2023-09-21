/// <reference types ="Cypress" />
import HomePage from "../../support/pageObjects/Homepage"
import DealsPage from "../../support/pageObjects/Dealspage"
import ProductPage from "../../support/pageObjects/Productpage"
import CartPage from '../../support/pageObjects/Cartpage.js'
import CartBasketPage from '../../support/pageObjects/CartBasketpage.js'
import CheckoutPage from '../../support/pageObjects/Checkoutpage'

const homePage = new HomePage()
const dealsPage = new DealsPage()
const productPage = new ProductPage()
const cartPage = new CartPage()
const cartBasketPage = new CartBasketPage()
const checkoutPage = new CheckoutPage()

describe('Todays Deals search', function () {
    before(function(){
        cy.fixture("example").then(function(data)
        {
            this.data=data
        }
        )
    })

    it('Search product, add proceed till payment is required', function () {
        cy.visit("https://www.amazon.co.uk/");

        //login in to Amazon account using Custom Commands
        cy.login(this.data.email,this.data.password)

        //Click Today's Deals
        let count = 0;
        homePage.getTopMenuContent().each(($el, index, $list) => {
            const itemName = $el.text()
            if ((itemName.includes(this.data.topMenu_option)) && (count == 0)) {
                cy.wrap($el).click()
                count++
            }
        })

        //add to cart and procees until payment 
        dealsPage.getHeader().should('include.text', "Today's Deals") 
        dealsPage.getItemCatagory().click() 
        dealsPage.getItem().click() 
        productPage.getAddToCartButton().click()
        cartPage.getBasketButton().click()
        cartBasketPage.getCartHeaderTitle().should('include.text', 'Shopping Basket')
        cartBasketPage.getCheckoutButton().click()
        checkoutPage.getCheckoutHeader().should('include.text', 'Checkout')        
        checkoutPage.getAddressBtn().click()

        //Verify payment
        checkoutPage.getPaymentBtn().should('include.text', 'Use this payment method')
        checkoutPage.getPaymentType().should('include.text', 'Add a credit or debit card')

    })
})