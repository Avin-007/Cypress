import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});




Given("I visit login page", () => {
  cy.visit("https://demo.guru99.com/insurance/v1/index.php");
});

When(''User enters email and password and password', () => {
  cy.get('#email').type("demo3321@mailinator.com")
  cy.get('#password').type("Demo@123")
})

Then ('User clicks on login button', () => {
cy.get('[name="submit"]').click() 
})

Then('User login is successful', () => {
  cy.contains('Signed in as ').should('be.visible', {timeout: 10000})
});
