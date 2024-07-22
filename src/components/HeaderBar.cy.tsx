// src/components/HeaderBar.cy.tsx
import HeaderBar from './HeaderBar'
import {MemoryRouter} from 'react-router-dom'
import '../styles.scss' // technically not needed.

describe('HeaderBar', () => {
  it('should', () => {
    cy.mount(
      <MemoryRouter>
        <HeaderBar />
      </MemoryRouter>,
    )
    cy.getByCy('header-bar-brand')
  })
})
