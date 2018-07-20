// const publidDir = __dirname + '/public';
// // [定数] webpack の出力オプションを指定します
// // 'production' か 'development' を指定
// const MODE = 'development';

// module.exports = {
//   mode:MODE,
//   entry: [
//     './src/index.js'
//   ],
//   output: {
//     path: publidDir,
//     publicPath: '/',
//     filename: 'bundle.js'
//   },
//   module: {
//     rules: [{
//       exclude: /node_modules/,
//       loader: 'babel-loader',
//       query: {
//         presets: ['react', 'es2015']
//       }
//     }]
//   },
//   resolve: {
//     extensions: ['.js', '.jsx']
//   },
//   devServer: {
//     historyApiFallback: true,
//     contentBase: publidDir
//   }
// };
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const MODE = 'development';
const publidDir = path.join(__dirname, '/public');
module.exports = [
  {
    mode: MODE,
    entry: [
      './src/index.jsx'
    ],
    output: {
      path: publidDir,
      publicPath: '/',
      filename: 'bundle.js'
    },
    module: {
      rules: [{
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        }
      }]
    },
    resolve: {
      extensions: ['.js', '.jsx']
    },
    devServer: {
      historyApiFallback: true,
      contentBase: publidDir
    }
  },
  {
    mode: MODE,
    entry: {
      style: './stylesheets/index.scss'
    },
    output: {
      path: publidDir,
      publicPath: '/',
      filename: 'bundle.css'
    },
    module: {
      rules: [
        {
          test: /\.css$/,
          loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader' })
        },
        {
          test: /\.scss$/,
          loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader!sass-loader' })
        }
      ]
    },
    // devServer: {
    //   historyApiFallback: true,
    //   contentBase: publidDir
    // },
    plugins: [
      new ExtractTextPlugin('bundle.css')
    ]
  }
];
