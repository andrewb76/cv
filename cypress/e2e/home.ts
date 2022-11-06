import { When, Then, DataTable } from "@badeball/cypress-cucumber-preprocessor";

When("I visit homepage", () => {
  cy.visit("/");
});

Then("I should see a navigation bar", () => {
  cy.get("nav").should("have.attr", "class", "main-menu");
});

Then("I checking all following links", (tabledata: DataTable) => {
  tabledata.hashes().forEach((row) => {
    cy.get(`nav a.${row["name"]}-link`)
      .should("have.attr", "href", `${row["url"]}`)
      .should("have.attr", "title", `${row["title"]}`)
      .contains(row["title"]);
  });
});
