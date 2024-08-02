// src/components/InputDetail.cy.tsx
import InputDetail from './InputDetail'
import '../styles.scss'

describe('InputDetail', () => {
  it('should', () => {
    const placeholder = 'Aslaug'
    const name = 'name'
    const value = 'some value'
    cy.mount(
      <InputDetail name={name} value={value} placeholder={placeholder} />,
    )

    cy.contains(name)
    cy.get('input').should('have.value', value)
    cy.findByPlaceholderText(placeholder)
  })
})
