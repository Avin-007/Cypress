
import { Given, When, Then, addCucumberPreprocessorPlugin} from '@badeball/cypress-cucumber-preprocessor';

Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});


Given('User is already logged in', () => {
  cy.visit("https://demo.guru99.com/insurance/v1/index.php"),
   cy.get('[name="submit"]').click() 
})

Then ('I should see Request quotation',() =>{
  cy.get('#ui-id-2').contains( "Request Quotation").should('be.visible')
})

Then ('I click Request',() =>{
  cy.get('#ui-id-2').contains( "Request Quotation").click()
})

Then ('I select Breakdowncover',() =>{
  cy.get('#quotation_breakdowncover').select(3,{force:true})
})


Then ('I select Repair option',() =>{
  cy.get('[type="radio"]').first().check() 
})

Then ('I enter incidents',() =>{
  cy.get("#quotation_incidents").type("some incidents ")
})

Then ('I enter reg.no',() =>{
  cy.get("#quotation_vehicle_attributes_registration").type("123456789")
})

Then ('I enter mileage',() =>{
  cy.get("#quotation_vehicle_attributes_mileage").type("5674")
})

Then ('I enter estimated value',() =>{
  cy.get('#quotation_vehicle_attributes_value').type("5666655")
})

Then  ('I select parking location',() =>{
  cy.get("#quotation_vehicle_attributes_parkinglocation").select("Driveway")
})

Then  ('I select satrt of policy',() =>{
  cy.get("#quotation_vehicle_attributes_policystart_1i").select("2016")
  cy.get("#quotation_vehicle_attributes_policystart_2i").select("March")
  cy.get("#quotation_vehicle_attributes_policystart_3i").select("7")
})

Then  ('I calculate premium',() =>{
  cy.get('input[value="Calculate Premium"]').click()

})