module.exports = {
	externals: ['react', 'react-dom', 'react-redux'],
	module: {
		rules: [
			{
				test: /\.css$/,
				exclude: /node_modules/,
				use: ['postcss-loader'],
			},
		],
	},
};
