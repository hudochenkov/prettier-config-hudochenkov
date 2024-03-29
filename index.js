// https://prettier.io/docs/en/options.html

/** @type {import("prettier").Config} */
export default {
	arrowParens: 'always',
	bracketSpacing: true,
	endOfLine: 'lf',
	bracketSameLine: false,
	jsxSingleQuote: false,
	printWidth: 100,
	quoteProps: 'as-needed',
	semi: true,
	singleQuote: true,
	tabWidth: 4,
	trailingComma: 'all',
	useTabs: true,
	overrides: [
		{
			files: ['*.css', '*.pcss', '*.scss'],
			options: {
				singleQuote: false,
			},
		},
	],
};
