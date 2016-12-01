var ExtractTextWebpackPlugin = require('extract-text-webpack-plugin')
var autoprefixer = require('autoprefixer')
var path = require('path')

var extractCSSPlugin = new ExtractTextWebpackPlugin('bundle.css')

module.exports = {
  entry: path.join(__dirname, 'src/index.js'),

  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },

  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel', query: { presets: ['es2015', 'react', 'stage-0'] }, exclude: /node_modules/ },
      { test: /\.css$/, loader: extractCSSPlugin.extract(['css', 'postcss-loader']) },
      { test: /\.(scss|sass)$/, loader: extractCSSPlugin.extract(['css?modules&source-map', 'postcss-loader', 'sass?sourceMap']) },
      { test: /\.(png|svg|jpg|ttf|eot|woff|woff2)$/, loader: 'file' }
    ]
  },

  sassLoader: {
    data: `@import "${path.resolve(__dirname, 'src/theme.sass')}";`
  },

  plugins: [
    extractCSSPlugin
  ],

  postcss: () => [ autoprefixer ],

  devtool: 'source-map'
}
