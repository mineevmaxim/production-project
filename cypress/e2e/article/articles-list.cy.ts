describe('Пользователь заходит на страницу со списком статей', () => {
	beforeEach(() => {
		cy.login().then((data) => {
			cy.visit('articles');
		});
	});
	it('и статьи успешно подгружаются', () => {
		cy.getByTestId('ArticleList').should('exist');
		cy.getByTestId('ArticleListItem').should('have.length.greaterThan', 3);
	});
	it('На стабах', () => {
		cy.intercept('GET', '**/articles?*', { fixture: 'articles.json' });
		cy.getByTestId('ArticleList').should('exist');
		cy.getByTestId('ArticleListItem').should('have.length.greaterThan', 2);
	});
});
