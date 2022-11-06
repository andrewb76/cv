Feature: My Home page
  Scenario: navigations works
    When I visit homepage
    Then I should see a navigation bar
    Then I checking all following links
      | name     | title    | url       |
      | home     | Home     | /         |
      | about    | About    | /about    |
      | cv       | CV       | /cv       |
      | projects | Projects | /projects |