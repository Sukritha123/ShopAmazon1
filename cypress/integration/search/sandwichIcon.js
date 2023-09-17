/// <reference types ="Cypress" />
describe('Sandwich Icon search', function () {
    before(function(){
        cy.fixture("example").then(function(data)
        {
            this.data=data
        }
        )
    })

    it('Search - Fire TV - Accessories', function () {
        cy.visit(Cypress.env('url') + "/");        //cy.visit("https://www.amazon.co.uk/");
        cy.contains('Continue without accepting').click();

        //sign in to Amazon account
        cy.login(this.data.email,this.data.password)

        //sandwich icon
        cy.get('a#nav-hamburger-menu').click()       

        //Search main menu- Fire TV
        let menuCount = 0;
        cy.get('div#hmenu-content ul li div').each(($el, index, $list) => {
            const itemName = $el.text()
            if ((itemName.includes(this.data.sandwichMain_option)) && (menuCount == 0)) {
                cy.wrap($el).click()
                menuCount++
            }
        })

        //Search child menu- Accessories
       let childMenuCount = 0;
       cy.get('.hmenu.hmenu-visible.hmenu-translateX li a.hmenu-item').each(($el, index, $list) => {
           const itemName = $el.text()
           if ((itemName.includes(this.data.sandwichChild_option)) && (childMenuCount == 0)) {
               cy.wrap($el).click({force: true})
               childMenuCount++
           }
       })

       //Validate searched item page is displayed - Fire TV Accessories
       cy.get('div#ucw-widget-title-firetvaccessories h1').should('include.text', this.data.sandwichMain_option+' '+this.data.sandwichChild_option)


    })
})