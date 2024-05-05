import { loginCommand } from '../commands/login';

Cypress.Commands.add('login', loginCommand);
declare global {
  namespace Cypress {
    interface Chainable {
      login(username?: string, password?: string): Chainable
    }
  }
}
