const path = require('path');
const HtmlwebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: [
    '@babel/polyfill', './client/index.js',
    'font-awesome/scss/font-awesome.scss'
  ],
  output: {
    path: path.join(__dirname, '/build'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['env', 'react', 'stage-2']
        },
        test: /\.(js|jsx)$/,
        exclude: /node_modules/
      },
      {
        test: /(\.s?css)$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.woff2?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: 'url-loader?limit=25000',
      },
      {
        test: /\.(ttf|eot|svg)(\?[\s\S]+)?$/,
        use: 'file-loader',
      },
      {
        test: /\.(jpe?g|png|gif|svg|ico)$/i,
        loader: 'url-loader?limit=25000',
        exclude: /node_modules/,
        include: __dirname,
      }
    ]
  },
  plugins: [
    new HtmlwebpackPlugin({
      template: './index.html'
    }),
  ],
  resolve: { extensions: ["*", ".js", ".jsx", ".ico", "jpg", ".png"] },
  // devtool: 'cheap-module-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'client/public'),
    historyApiFallback: true
  },
};
