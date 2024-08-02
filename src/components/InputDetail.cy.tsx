// src/components/InputDetail.cy.tsx
import InputDetail from './InputDetail'

describe('InputDetail', () => {
  it('should', () => {
    const placeholder = 'Aslaug'
    const name = 'name'
    cy.mount(<InputDetail name={name} placeholder={placeholder} />)

    cy.contains(name)
    cy.findByPlaceholderText(placeholder)
  })
})
