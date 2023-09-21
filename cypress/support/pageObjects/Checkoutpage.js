class CheckoutPage
{

   getCheckoutHeader()
   {
      return cy.get('h1')
   }
   getAddressBtn()
   {
      return cy.get('input[data-testid="Address_selectShipToThisAddress"]')
   }
   getPaymentBtn()
   {
      return cy.get('span.os-primary-action-button-text.buy-button-line-height')
   }
   getPaymentType()
   {
      return cy.get('.a-section.pmts-add-credit-card-component-container div:nth-child(2)')
   }

  
}
export default CheckoutPage;