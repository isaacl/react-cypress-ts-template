// src/components/InputDetail.cy.tsx
import InputDetail from './InputDetail'

describe('InputDetail', () => {
  it('should', () => {
    const placeholder = 'Aslaug'
    cy.mount(<InputDetail placeholder={placeholder} />)
    cy.findByPlaceholderText(placeholder)
  })
})
