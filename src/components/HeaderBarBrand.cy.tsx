// src/components/HeaderBarBrand.cy.tsx
import HeaderBarBrand from './HeaderBarBrand'
import {BrowserRouter} from 'react-router-dom'
declare const expect: Chai.ExpectStatic
import '../styles.scss' // technically not needed here

describe('HeaderBarBrand', () => {
  beforeEach(() => {
    cy.mount(
      <BrowserRouter>
        <HeaderBarBrand />
      </BrowserRouter>,
    )
  })

  it('should verify external link attributes', () => {
    cy.get('a')
      .should('have.attr', 'href', 'https://reactjs.org/')
      .and('have.attr', 'target', '_blank')
      .and('have.attr', 'rel', 'noopener noreferrer')
    cy.getByCy('header-bar-brand').within(() => cy.get('svg'))
  })

  it('should verify internal link spans and navigation', () => {
    cy.getByCy('navLink').within(() =>
      ['TOUR', 'OF', 'HEROES'].forEach((part: string) =>
        cy.contains('span', part),
      ),
    )
    cy.getByCy('navLink').click()
    cy.url().then(href => {
      const url = new URL(href)
      expect(url.pathname).to.eq('/')
    })
  })
})
