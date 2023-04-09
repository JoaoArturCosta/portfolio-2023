const autoprefixer = require('autoprefixer')
const { fontFamily } = require('tailwindcss/defaultTheme')

module.exports = {
	content: [
		'./src/**/*.{js,ts,jsx,tsx}',
		'./src/pages/**/*.{html,js}',
		'./src/components/**/*.{html,js}',
	],
	future: {
		// removeDeprecatedGapUtilities: true,
		// purgeLayersByDefault: true,
	},
	theme: {
		extend: {
			fontFamily: {
				mont: ['var(--font-mont)', ...fontFamily.sans],
			},
			colors: {
				dark: '#1b1b1b',
				light: '#f5f5f5',
				primary: '#B63E96', // 240,86,199
				primaryDark: '#58E6D9', // 80,230,217
			},
			animation: {
				'spin-slow': 'spin 10s linear infinite',
			},
		},
	},
	variants: {},
	plugins: [require('tailwindcss'), require('autoprefixer')],
}
