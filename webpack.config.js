const path = require('path');

module.exports = {
  mode: 'development',
  entry: ["./app/main.ts"],
  output: {
    path: path.resolve(__dirname, 'assets'),
    filename: "bundle.js"
  },
  devServer: {
    hot: true,
    static: {
      directory: path.join(__dirname, 'assets'),
    },
    compress: true,
    port: 9000,
  },
};
// module.exports = {
//   devServer: {
//     contentBase: path.join(__dirname, 'dist'),
//     compress: true,
//     port: 9000
//   },
//   entry: {
//     app: ['./app/main.ts']
//   },
//
//   output: {
//     path: path.resolve(__dirname, 'assets'),
//     filename: 'bundle.js',
//   }
// }
