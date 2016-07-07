'use strict';
// require("babel-plugin-syntax-jsx")

var cache = {};
var loaders = [
	{
		test: /\.jsx$/,
		loader: 'babel-loader'
	},
	{
		test: /\.es6\.js$/,
		loader: 'babel-loader'
	},
	{
		test: /\.css$/,
		loader: 'style-loader!css-loader'
	}
];
var extensions = [
	'', '.js', '.jsx', '.es6.js'
];

module.exports = [{
	cache: cache,
	module: {
		loaders: loaders
	},
	entry: {
		main: './src/Main.jsx',
	},
	output: {
		path: './dist',
		filename: '[name].js'
	},
	resolve: {
		extensions: extensions,
		root: [
			__dirname,
			__dirname + '/src'
		],
		alias: {
			"react": __dirname+"/node_modules/react/dist/react.min.js",
			"react-dom": __dirname+"/node_modules/react-dom/dist/react-dom.min.js"
		}
	}
}];