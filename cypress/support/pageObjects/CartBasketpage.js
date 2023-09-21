class CartBasketPage
{

   getCartHeaderTitle()
   {
    return cy.get('div.a-row.sc-cart-header div h1')
   }
   getDeleteButton()
   {
    return cy.get('input[value="Delete"]')
   }
   getDeleteConfirmText()
   {
    return cy.get('div[data-action="delete"] span.a-size-base')
   }
   getCartHeaderText()
   {
    return cy.get('div.a-row.sc-cart-header div h1')
   }
   getCheckoutButton()
   {
    return cy.get('input[value="Proceed to checkout"]')
   }
    
}
export default CartBasketPage;