const path = require('path');

module.exports = {
  // other settings...
  entry: './src/index.js', // your entry file
  output: {
    path: path.resolve(__dirname, 'dist'), // output directory
    filename: 'bundle.js', // output bundle name
  },
  module: {
    rules: [
      {
        test: /\.mjs$/,
        enforce: 'pre',
        use: ['source-map-loader'],
        exclude: /node_modules\/@react-three\/drei\/node_modules\/@mediapipe/,
      },
      // other rules...
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.mjs'], // extensions webpack will resolve
  },
};
