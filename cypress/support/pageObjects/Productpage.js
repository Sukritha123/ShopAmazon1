class ProductPage
{

   getProductTitle()
   {
    return cy.get('span#productTitle')
   }
   getAddToCartButton()
   {
    return cy.get('input#add-to-cart-button')
   }
   getNoThankstButton()
   {
    return cy.contains(' No thanks ')
   }
    
}
export default ProductPage;