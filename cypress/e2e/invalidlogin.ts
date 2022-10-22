import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});



Given("I visit login page", () => {
  cy.visit("https://demo.guru99.com/insurance/v1/index.php");
});

When('User enters wrong credentials', () => {
  cy.get('#email').type("demo3321@mailinator.com")
  cy.get('#password').type("xyz")
})

Then ('User clicks on login button', () => {
cy.get('[name="submit"]').click() 
})

Then('User error message is displayed', () => {
  cy.contains('Enter your Email address and password correct ').should('be.visible', {timeout: 10000})
})

