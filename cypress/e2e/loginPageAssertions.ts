import { Given, When, Then, addCucumberPreprocessorPlugin } from '@badeball/cypress-cucumber-preprocessor';


Given('I open login page', () => {
    cy.visit("https://demo.guru99.com/insurance/v1/index.php")
})

Then('I validate email, password and log in button visibility', (email, password) => {
  cy.get("#email").should('be.visible'),
        cy.get("#password").should('be.visible'),
        cy.get('[name="submit"]').should('be.visible')  
})
