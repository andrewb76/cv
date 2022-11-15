import {
  Given,
  When,
  Then,
  DataTable
} from '@badeball/cypress-cucumber-preprocessor'

Given('a web browser on CV page', function () {
  cy.visit('/')
})

When('page loaded', () => {
  cy.wait(1000)
})

When('I scroll to the {string} section', (sectionName: string) => {
  cy.get(`section.${sectionName}`).scrollIntoView()
})

// When('I visit {string}', (url: string) => {
// });

Then('I should see cv page', () => {
  cy.location('pathname').should('eq', '/')
})

Then(
  'I see that all following sections presents on page',
  (sections: DataTable) => {
    sections.hashes().forEach((row) => {
      cy.get(`section.${row.section}`)
        .scrollIntoView()
        .should('be.visible')
        .should('have.class', row.section)
    })
  }
)

Then(
  'I should see that all following links presents in the section',
  (docs: DataTable) => {
    const linkBox = cy.get(`.download-links`)
    linkBox.should('be.visible')
    docs.hashes().forEach((row) => {
      linkBox.get(`a.${row.docType}`)
        .should('be.visible')
        .should('have.class', 'cvDocLink')
    })
  }
)