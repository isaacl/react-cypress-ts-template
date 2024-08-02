//  src/components/InputDetail.cy.tsx
import InputDetail from './InputDetail'
import '../styles.scss'

describe('InputDetail', () => {
  it('should allow the input field to be modified', () => {
    const placeholder = 'Aslaug'
    const name = 'name'
    const value = 'some value'
    const newValue = '42'
    cy.mount(
      <InputDetail name={name} value={value} placeholder={placeholder} />,
    )

    cy.contains(name)
    cy.findByPlaceholderText(placeholder).clear().type(newValue)
    cy.get('input').should('have.value', newValue)
  })

  it('should not allow the input field to be modified when readonly', () => {
    const placeholder = 'Aslaug'
    const name = 'name'
    const value = 'some value'
    cy.mount(
      <InputDetail
        name={name}
        value={value}
        placeholder={placeholder}
        readOnly={true}
      />,
    )

    cy.contains(name)
    cy.findByPlaceholderText(placeholder).should('have.attr', 'readOnly')
  })
})
