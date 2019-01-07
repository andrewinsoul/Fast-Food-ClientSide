const path = require('path');

module.exports = {
  entry: [
    '@babel/polyfill', './client/index.js',
    'font-awesome/scss/font-awesome.scss'
  ],
  output: {
    path: path.join(__dirname, 'public'),
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
        use: 'url-loader?limit=10000',
      },
      {
        test: /\.(ttf|eot|svg)(\?[\s\S]+)?$/,
        use: 'file-loader',
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
          'file-loader?name=/public/images/[name].[ext]',
          {
            loader: 'url-loader',
            query: {
              mozjpeg: {
                progressive: true,
              },
              gifsicle: {
                interlaced: false,
              },
              optipng: {
                optimizationLevel: 4,
              },
              pngquant: {
                quality: '75-90',
                speed: 3,
              },
            },
        }
      ],
        exclude: /node_modules/,
        include: __dirname,
      }
    ]
  },
  resolve: { extensions: ["*", ".js", ".jsx"] },
  devtool: 'cheap-module-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'client/public'),
    historyApiFallback: true
  },
  mode: 'development'
};
