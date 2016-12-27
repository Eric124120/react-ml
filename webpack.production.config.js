/**
 * Created by huangchengwen on 16/12/26.
 */

var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
const extractCSS = new ExtractTextPlugin('./css/[name]_[hash:8].css');

module.exports = {
	devtool: 'eval-source-map',
	entry: __dirname + "/app/main.js",
	output: {
		path: __dirname + "/dist",
		filename: "build_[hash:8].js"
	},
	/*
	 * Loaders配置
	 * test：一个匹配loaders所处理的文件的拓展名的正则表达式（必须）
	 * loader：loader的名称（必须）
	 * include/exclude:手动添加必须处理的文件（文件夹）或屏蔽不需要处理的文件（文件夹）（可选）
	 * query：为loaders提供额外的设置选项（可选）
	 */
	module: {
		loaders: [
			{
				test: /\.json$/,
				loader: "json"
			},
			{
				test: /\.js[x]?$/,
				exclude: /node_modules/,
				loader: 'babel'
			},
			{
				test: /\.scss$/i,
				loader: extractCSS.extract(['css','sass'])
			},
			{
				test: /\.(png|jpg)$/,
				loader: 'url-loader?limit=4192&name=images/[name]_[hash:8].[ext]'
			}
		]
	},

	plugins: [
		new HtmlWebpackPlugin({
			favicon:'./app/images/favicon.ico', //favicon路径
			template: __dirname + "/app/index.html"
		}),
		// 为组件分配ID，通过这个插件webpack可以分析和优先考虑使用最多的模块，并为它们分配最小的ID
		new webpack.optimize.OccurenceOrderPlugin(),
		// 压缩JS和CSS
		new webpack.optimize.UglifyJsPlugin(),
		extractCSS // 分离CSS和JS文件
	]
}