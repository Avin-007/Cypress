
import { Given, When, Then, addCucumberPreprocessorPlugin} from '@badeball/cypress-cucumber-preprocessor';

Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});


Given('User already raised quotation', () => {
  cy.visit("https://demo.guru99.com/insurance/v1/index.php")
   cy.get('[name="submit"]').click() 
})

Then ('User should click Retrieve Quotation',() =>{
  cy.get('#ui-id-3').contains( "Retrieve Quotation").click()
})

Then ('user enters identification number',() =>{
  cy.get('input[name="id"]').type("17878")
})

Then ('User clicks Retrieve',() =>{
  cy.get('#getquote').click()
})
