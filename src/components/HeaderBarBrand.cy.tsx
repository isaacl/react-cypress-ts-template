// src/components/HeaderBarBrand.tsx
import HeaderBarBrand from './HeaderBarBrand'
import '../styles.scss'

describe('HeaderBarBrand', () => {
  it('should', () => {
    cy.mount(<HeaderBarBrand />)
    cy.get('a')
      .should('have.attr', 'href', 'https://reactjs.org/')
      .and('have.attr', 'target', '_blank')
      .and('have.attr', 'rel', 'noopener noreferrer')
  })
})
