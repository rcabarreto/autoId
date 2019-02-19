module.exports = [
  {
    test: /\.jsx?$/,
    exclude: /node_modules/,
    use: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'env', 'stage-2'],
        },
      },
    ],
  },
  {
    test: /\.css$/,
    use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
  },
  {
    test: /\.s(a|c)ss$/,
    use: [{ loader: 'style-loader' }, { loader: 'css-loader' }, { loader: 'sass-loader' }],
  },
  {
    test: /\.(gif|png|jpe?g)$/i,
    use: [{
      loader: 'file-loader',
      options: {
        name: '[hash].[ext]',
        outputPath: 'images/',
      },
    }, {
      loader: 'image-webpack-loader',
      options: {
        bypassOnDebug: true,
      },
    }],
  },
  {
    test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
    use: [{
      loader: 'file-loader',
      options: {
        name: '[name].[ext]',
        outputPath: 'fonts/',
      },
    }],
  },
]
