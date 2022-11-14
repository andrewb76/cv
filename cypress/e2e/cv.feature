Feature: My CV page
  As a web surfer, I want to view this CV, so that I can hired.

Scenario: CV page works properly
  Given a web browser on CV page
  When page loaded
  Then I should see cv page
  And I see that all following sections presents on page
    | section        |
    | contacts       |
    | summary        |
    | skills         |
    | languages      |
    | projects       |
    | certifications |
    | educations     |
