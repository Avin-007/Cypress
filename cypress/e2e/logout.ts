import { When, Then } from "@badeball/cypress-cucumber-preprocessor";

Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});


When("I am in profile page", () => {
  cy.visit("https://demo.guru99.com/insurance/v1/index.php"),
  cy.get('[name="submit"]').click() 
});

Then ("I see Logout button", () => {
  cy.contains('Log out').should('be.visible');
  
});

  When ("I click logout", () => {
    cy.contains('Log out').click()
  
  });
  

  Then("user is redirected to login page", () => {
   cy.contains("Register").should('be.visible')
   cy.contains('Log in').should('be.visible');

    
  
  });