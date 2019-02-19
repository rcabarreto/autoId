const webpack = require('webpack')
const paths = require('./paths')


module.exports = {
  mode: 'development',
  output: {
    filename: '[name].js',
    path: paths.outputPath,
    chunkFilename: '[name].js',
  },
  performance: {
    hints: 'warning',
    maxAssetSize: 450000,
    maxEntrypointSize: 8500000,
    assetFilter: assetFilename => (
      assetFilename.endsWith('.css') || assetFilename.endsWith('.js')
    ),
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/](node_modules|common|src\/schema)[\\/]/,
          name: 'dependencies',
          chunks: 'all',
        },
      },
    },
  },
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: paths.outputPath,
    compress: true,
    hot: true,
    historyApiFallback: true,
    port: 1234,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
}
