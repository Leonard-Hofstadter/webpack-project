var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
	devtool: 'eval-source-map',
	entry: __dirname + "/app/js/main.js", //入口文件
	output: {
		path: __dirname + "/build", //打包后文件存入
		filename: "bundle.js?[hash]",
		chunkFilename: "[id].js"
	},
	resolve: {
		extensions: ['', '.js', '.vue', '.css'],
		alias: {
			'vue$': 'vue/dist/vue.js',
			'filter': __dirname + "/app/js/filter/filter.js"
		}
	},
	module: {
		loaders: [{
			test: /\.js$/,
			exclude: /node_modules/,
			loader: 'babel',
			query: {
				presets: ['es2015']
			}
		}, {
			test: /\.vue$/,
			loader: 'vue!eslint'
		}, {
			test: /\.css$/,
			loader: ExtractTextPlugin.extract('style', 'css?modules!postcss')
		}, {
			test: /.*\.(gif|png|jpe?g|svg)$/i,
			loaders: [
				'file?hash=sha512&digest=base64&name=img/[hash].[ext]',
				'image-webpack'
			]
		}]
	},
	imageWebpackLoader: {
		pngquant: {
			quality: "65-90",
			speed: 4
		},
		svgo: {
			plugins: [{
				removeViewBox: false
			}, {
				removeEmptyAttrs: false
			}]
		}
	},
	plugins: [
		new CleanWebpackPlugin(['build']),
		new webpack.BannerPlugin("Copyright from leonard"),
		new HtmlWebpackPlugin({
			template: __dirname + "/app/html/index.html"
		}),
		new webpack.optimize.OccurenceOrderPlugin(),
		new webpack.optimize.UglifyJsPlugin(),
		new ExtractTextPlugin("css/[name].css?[contenthash]")
	],
	postcss: [
		require('autoprefixer')
	],
	devServer: {
		contentBase: "./build", //本地服务器所加载的页面所在的目录
		colors: true,
		port: 8090,
		historyApiFallback: false, //不跳转
		inline: true //实时刷新
	}
}