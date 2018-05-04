const webpack = require('webpack');

module.exports = {
  mode: "production",

  entry: {
    main: ['./src/vendor.js', './src/index.js']
  },

  output: {
    filename: '[name].js',
    path: `${__dirname}/dist`
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['babel-preset-env']
          }
        }
      }
    ]
  },

  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /node_modules/,
          name: "vendor",
          chunks: "initial",
          enforce: true
        }
      }
    }
  }
}