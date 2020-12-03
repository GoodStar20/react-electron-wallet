module.exports = {
	future: {
		// removeDeprecatedGapUtilities: true,
		// purgeLayersByDefault: true,
	},
	purge: [],
	theme: {
		extend: {},
		screens: {
			xs: { max: '374px' },
			sm: { max: '639px' },
			md: { max: '767px' },
			lg: { max: '1023px' },
			xl: { max: '1279px' },
			'2xl': { max: '1359px' },
		},
		colors: {
			green: { DEFAULT: '#029383', dark: '#046e62', light: '#b1d3cf' },
			black: { DEFAULT: '#1f2121', dark: '#0c0d0d', light: '#2f3333' },
			gray: { DEFAULT: '#bfbebe', dark: '#5a5d60', light: '#c7c9cd' },
		},
		height: {
			13: '3.125rem',
			14: '3.5rem',
		},
	},
	variants: {},
	plugins: [],
};
