Feature: Login
  Scenario: validating login
    Given I visit login page
When User enters email as '<email>' and password as '<password>'
        Then User clicks on login button
        Then User login is successful 