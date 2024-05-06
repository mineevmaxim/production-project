import { EditableProfileCard } from '../../src/features/editableProfileCard';
import { TestProvider } from '../../src/shared/lib/tests/componentRender/componentRender';

const USER_ID = '1';

describe('EditableProfileCard.cy.ts', () => {
	it('playground', () => {
		cy.intercept('GET', '**/profile/*', { fixture: 'profile.json' });
		cy.mount(
			<TestProvider
				options={{
					initialState: {
						user: {
							authData: {
								id: USER_ID,
							},
						},
					},
				}}
			>
				<EditableProfileCard id={USER_ID} />
			</TestProvider>,
		);
		// описываем тест кейс
	});
});
