class Commitquality
{

   getTFilterTextBox()
   {
    return cy.get('input[placeholder="Filter by product name"]')
   }
   getTFilterButton()
   {
    return cy.get('button[data-testid="filter-button"]')
   }
   getTTextMsg()
   {
    return cy.get('p.add-product-message')
   }
   getTResetButton()
   {
    return cy.get('button[data-testid="reset-filter-button"]')
   }
   getTableRows()
   {
    return cy.get('tr[data-testid]')
   }
   getShowMoreButton()
   {
    return cy.get('button[data-testid="show-more-button"]')
   }
  
}
export default Commitquality;