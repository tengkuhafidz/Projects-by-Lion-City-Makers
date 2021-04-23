module.exports = {
	purge: [
		'./pages/**/*.tsx',
		'./main/**/*.tsx',
		'./styles/**/*.css',
		'./utils/**/*.ts',
	],
	darkMode: 'class', // or 'media' or 'class'
	theme: {
		extend: {},
	},
	variants: {
		extend: {
			ringWidth: ['hover'],
		},
	},
	plugins: [],
}
