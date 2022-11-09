import CVView from "./CVView.vue";

describe("<CVView />", () => {
  it("renders", () => {
    // see: https://test-utils.vuejs.org/guide/
    cy.mount(CVView);
  });
});
