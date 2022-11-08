import CvSection from "@src/components/cv/CvSection.vue";

describe("<CvSection />", () => {
  it("renders", () => {
    // see: https://test-utils.vuejs.org/guide/
    cy.mount(CvSection);
  });
});
