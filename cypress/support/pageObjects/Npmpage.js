class Npmpage
{

   getPageURL()
   {
    return cy.url()
   }
   getHeadline()
   {
    return cy.get('h2.f-subheadline-m')
   }
   getTabPro()
   {
    return cy.get('a#nav-pro-link')
   }



    
}
export default Npmpage;