Feature: My CV page
  As a web surfer, I want to view this CV, so that I can be hired.

Scenario: CV page works properly
  Given a web browser on CV page
  When page loaded
  Then I should see cv page
  And I see that all following sections presents on page
    | section        |
    | main           |
    | contacts       |
    | summary        |
    | skills         |
    | languages      |
    | projects       |
    | certifications |
    | educations     |

Scenario: CV page provide ability to download printable CV
  Given a web browser on CV page
  When I scroll to the "main" section
  Then I should see that all following links presents in the section
    | docType  |
    | word     |
    | gdoc     |
    | pdf      |
