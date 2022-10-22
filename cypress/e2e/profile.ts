import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});



Given("I am in profile page", () => {
  cy.visit("https://demo.guru99.com/insurance/v1/index.php");
  cy.get('[name="submit"]').click() 
  cy.get("#ui-id-5").contains("Edit Profile").click()

});


Then ('I edit profile information', () => {
 //Title
 cy.get('#user_title').select("Mrs")
 cy.get('#user_surname').type("surname")
 cy.get("#user_firstname").type("firstname")
 cy.get('#user_phone').type("9800000000")
 cy.get('#user_dateofbirth_1i').select("1969")
 cy.get("#user_dateofbirth_2i").select("March")
cy.get("#user_dateofbirth_3i").select("1")
cy.get('[type="radio"]').first().check({force:true}) 
cy.get("#user_licenceperiod").select("8")


//ocuptation
cy.get("#user_occupation_id").select("Artist")
cy.get("#user_address_attributes_street").type("street")
cy.get("#user_address_attributes_city").type("city")
cy.get('#user_address_attributes_county').type("Nepal")
cy.get("#user_address_attributes_postcode").type("00977")
cy.get('input[name="commit"]').click({force:true})

  })
  