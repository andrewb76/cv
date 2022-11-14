import TheContacts from './TheContacts.vue'

describe('<TheContacts />', () => {
  it('renders', () => {
    // see: https://test-utils.vuejs.org/guide/
    cy.mount(TheContacts)
  })
})
