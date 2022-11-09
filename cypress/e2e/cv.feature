Feature: My CV page
  Scenario: I can get here by direct link
    When I visit "/"
    Then I should see cv page
    Then I see that all following sections presents on page
      | section        |
      | contacts       |
      | summary        |
      | educations     |
      | certifications |
      | skills         |
      | languages      |
      | projects       |
