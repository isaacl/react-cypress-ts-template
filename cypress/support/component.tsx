// cypress/support/component.tsx
import './commands'
import {mount} from 'cypress/react18'
// import styles here so you don't have to import in each component test
import '../../src/styles.scss'

Cypress.Commands.add('mount', mount)
