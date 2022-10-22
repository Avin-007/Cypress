Feature: Logout
  Scenario: Logout User 

    When I am in profile page

    Then I see Logout button

    When I click logout 

 Then user is redirected to login page