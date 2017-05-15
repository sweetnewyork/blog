const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	entry: {
		main: './resources/views/app.jsx'
	},
	output: {
		path: __dirname,
		filename: './public/javascripts/[name].bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				loader: 'babel-loader',
				options: {
					presets: ['es2015', 'stage-1', 'react']
				}
			},
			{
				test: /\.scss$/,
				loader: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: ['css-loader', 'sass-loader']
				})
			},
			{
				test: /\.(png|jpg)$/,
				loader:'url-loader',
				options: {
					limit: '8192',
					name: 'public/images/[name].[ext]'
				}
			}
		]
	},
	plugins: [
		new ExtractTextPlugin({
			filename: './public/stylesheets/common.css'
		})
	]
};
