const path = require('path');
const CleanPlugin = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    // shop: './src/non-optimized/shop.js'
    shop: './src/non-optimized/shop.js'
    // context: __dirname + '/src', // Adds a context explicitly
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist', 'assets', 'scripts'),
    publicPath: 'assets/scripts/'
  },
  devtool: 'cheap-source-map',

// devServer: {
//     static: { 
//         directory: path.resolve(__dirname, './dist'),
//         // publicPath: 'assets/scripts/'
//     },
//     devMiddleware:{
//         writeToDisk: true
//     }
// }
module: {
    rules: [
      {
        test: /\.(?:js|mjs|cjs)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', { targets: "defaults" }]
            ]
          }
        }
      }
    ]
  },
  plugins: [
    new CleanPlugin.CleanWebpackPlugin()
]
}