const path = require('path');
const CleanPlugin = require('clean-webpack-plugin');
// const CleanPlugin = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    shop: './src/non-optimized/shop.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist', 'assets', 'scripts'),
    publicPath: 'assets/scripts/'
  },
  devtool: 'eval-cheap-module-source-map',
//   devServer: {
//     contentBase: './dist'
//   }
devServer: {
    static: { 
        directory: path.resolve(__dirname, './dist'),
        // publicPath: 'assets/scripts/'
    },
    devMiddleware:{
        writeToDisk: true
    }
},
plugins: [
    new CleanPlugin.CleanWebpackPlugin({
      protectWebpackAssets: false,
      cleanAfterEveryBuildPatterns: ['*.LICENSE.txt']
    })
],
module: {
    rules: [
      {
        test: /\.(?:js|mjs|cjs)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
                [
                    '@babel/preset-env', {useBuiltIns: 'usage', corejs: {version: 3.32 }}
                ]
            ]
          }
        }
      }
    ]
  }
}



    