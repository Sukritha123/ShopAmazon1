class ProductListpage
{

   getResultHeader()
   {
    return cy.get('div.a-section.a-spacing-none.s-messaging-widget-results-header div span')
   }
   getProductNames()
   {
    return cy.get('[data-component-type="s-search-result"]').find('span.a-size-medium.a-color-base.a-text-normal')
   }


    
}
export default ProductListpage;