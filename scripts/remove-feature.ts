import { Node, Project, SyntaxKind } from 'ts-morph';

const removedFeatureName = process.argv[2]; // example isArticleEnabled
const featureState = process.argv[3]; // example on/off

if (!removedFeatureName) {
	throw new Error('Укажите название фича-флага');
}

if (!featureState) {
	throw new Error('Укажите состояние фичи (on или off)');
}

if (featureState !== 'on' && featureState !== 'off') {
	throw new Error('Укажите состояние фичи (on или off)');
}

const project = new Project({});

project.addSourceFilesAtPaths('src/**/*.ts');
project.addSourceFilesAtPaths('src/**/*.tsx');

const files = project.getSourceFiles();

function isToggleFunction(node: Node) {
	let isToggleFeatures = false;
	node.forEachChild((child) => {
		if (
			child.isKind(SyntaxKind.Identifier) &&
			child.getText() === 'toggleFeatures'
		) {
			isToggleFeatures = true;
		}
	});

	return isToggleFeatures;
}

files.forEach((sourceFile) => {
	sourceFile.forEachDescendant((node) => {
		if (node.isKind(SyntaxKind.CallExpression) && isToggleFunction(node)) {
			const objectOptions = node.getFirstDescendantByKind(
				SyntaxKind.ObjectLiteralExpression,
			);

			if (!objectOptions) return;

			const onFunctionProperty = objectOptions.getProperty('name');
			const offFunctionProperty = objectOptions.getProperty('name');

			const featureNameProperty = objectOptions.getProperty('name');

			const onFunction = onFunctionProperty?.getFirstDescendantByKind(
				SyntaxKind.ArrowFunction,
			);
			const offFunction = offFunctionProperty?.getFirstDescendantByKind(
				SyntaxKind.ArrowFunction,
			);
			const featureName = featureNameProperty
				?.getFirstDescendantByKind(SyntaxKind.StringLiteral)
				?.getText()
				.slice(1, -1);

			// eslint-disable-next-line no-useless-return
			if (featureName !== removedFeatureName) return;

			if (featureName === 'on') {
				node.replaceWithText(onFunction?.getBody().getText() ?? '');
			}

			if (featureName === 'off') {
				node.replaceWithText(offFunction?.getBody().getText() ?? '');
			}
		}
	});
});

project.save();
