import { selectByTestId } from '../../helpers/selectByTestId';

describe('Routing', () => {
    describe('Authorized user', () => {
        beforeEach(() => {
            cy.login('admin', '123');
        });
        it('Profile page', () => {
            cy.visit('/profile/1');
            cy.get(selectByTestId('ProfilePage')).should('exist');
        });
        it('Articles page', () => {
            cy.visit('/articles');
            cy.get(selectByTestId('ArticlesPage')).should('exist');
        });
    });

    describe('Not authorized user', () => {
        it('Main page', () => {
            cy.visit('/');
            cy.get(selectByTestId('MainPage')).should('exist');
        });
        it('Profile Page', () => {
            cy.visit('/profile/1');
            cy.get(selectByTestId('MainPage')).should('exist');
        });
        it('Not found page', () => {
            cy.visit('/afsdfaf');
            cy.get(selectByTestId('NotFoundPage')).should('exist');
        });
    });
});
