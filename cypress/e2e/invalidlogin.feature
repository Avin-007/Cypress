Feature: Login
  Scenario: invalid login
    Given I visit login page
When User enters wrong credentials
        Then User clicks on login button
        Then User error message is displayed