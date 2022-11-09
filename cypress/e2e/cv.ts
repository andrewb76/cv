import { When, Then, DataTable } from "@badeball/cypress-cucumber-preprocessor";

When("I visit {string}", (url: string) => {
  cy.visit(url);
});

Then("I should see cv page", () => {
  cy.location("pathname").should("eq", "/");
});

Then(
  "I see that all following sections presents on page",
  (sections: DataTable) => {
    sections.hashes().forEach((row) => {
      cy.get(`section.${row["section"]}`)
        .should("be.visible")
        .should("have.class", row["section"]);
    });
  }
);
