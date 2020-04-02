module.exports = [{
    mode: 'development',
    entry: {
      'index': './src/user/js/index.js',
    },

    output: {
      path: __dirname + '/user/js',
      filename: '[name]-bundle.js'
    },
    module: {
      rules: [{
        test: /\.html$/,
        use: [{
          loader: 'html-loader',
          options: {
            minimize: true
          }
        }],
      }]
    }
  },
];
