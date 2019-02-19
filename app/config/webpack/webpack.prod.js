const CleanWebpackPlugin = require('clean-webpack-plugin')
const paths = require('./paths')

module.exports = {
  mode: 'production',
  output: {
    filename: `${paths.jsFolder}/[name].js`,
    path: paths.outputPath,
    chunkFilename: `${paths.jsFolder}/[name].js`,
  },
  plugins: [
    new CleanWebpackPlugin([paths.outputPath.split('/').pop()], {
      root: paths.root,
    }),
  ],
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
}
