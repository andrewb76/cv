Feature: My CV page
  Scenario: I can get here from menu
    When I visit homepage and click CV menu item
    Then I should see cv page

  Scenario: I can get here by direct link
    When I visit "/cv"
    Then I should see cv page
    Then I see that all following sections presents on page
      | section        |
      | contacts       |
      | summary        |
      | educations     |
      | certifications |
      | skills         |
