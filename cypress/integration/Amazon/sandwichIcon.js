/// <reference types ="Cypress" />
import HomePage from '../../support/pageObjects/Homepage'
import BrowsePage from '../../support/pageObjects/Browsepage'

const homePage = new HomePage()
const browsePage = new BrowsePage()

describe('Sandwich Icon search', function () {
    before(function(){
        cy.fixture("example").then(function(data)
        {
            this.data=data
        }
        )
    })

    it('Search - Fire TV - Accessories', function () {
        cy.visit("https://www.amazon.co.uk/");

        //login in to Amazon account using Custom Commands
        cy.login(this.data.email,this.data.password)

        //sandwich icon
        homePage.getSandwichIcon().click()       

        //Search main menu- Fire TV
        let menuCount = 0;
        homePage.getSandwichMainMenuContent().each(($el, index, $list) => {
            const itemName = $el.text()
            if ((itemName.includes(this.data.sandwichMain_option)) && (menuCount == 0)) {
                cy.wrap($el).click()
                menuCount++
            }
        })

        //Search child menu- Accessories
       let childMenuCount = 0;
       homePage.getSandwichChildMenuContent().each(($el, index, $list) => {
           const itemName = $el.text()
           if ((itemName.includes(this.data.sandwichChild_option)) && (childMenuCount == 0)) {
               cy.wrap($el).click({force: true})
               childMenuCount++
           }
       })

       //Validate searched item page is displayed - Fire TV Accessories
       browsePage.getSubTitle().should('include.text', this.data.sandwichMain_option+' '+this.data.sandwichChild_option)


    })
})