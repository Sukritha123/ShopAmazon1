class Demoblazepage
{

   getPageURL()
   {
    return cy.url()
   }
   getTabContact()
   {
    return cy.get('a[data-target="#exampleModal"]')
   }
   getContactModalTitle()
   {
    return cy.get('h5#exampleModalLabel')
   }
   getContactModalTextbox()
   {
    return cy.get('textarea#message-text')
   }
   getContactModalSendBtn()
   {
    return cy.get('button[onclick="send()"]')
   }



    
}
export default Demoblazepage;