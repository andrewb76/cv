import TheMainMenu from './TheMainMenu.vue'

describe('<TheMainMenu />', () => {
  it('renders without params', () => {
    // see: https://test-utils.vuejs.org/guide/
    cy.mount(TheMainMenu, {
      propsData: {}
    })

    cy.contains('Home')
  })

  it('renders with params', () => {
    const links = [
      { name: 'link1', url: '/l1', title: 'Link 1' },
      { name: 'link2', url: '/l2', title: 'Link 2' },
      { name: 'link3', url: '/l3', title: 'Link 3' }
    ]
    cy.mount(TheMainMenu, {
      propsData: {
        links
      }
    })

    cy.contains(links.map((ln) => ln.title).join(''))
  })
})
