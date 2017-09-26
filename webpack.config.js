const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlWebpackIncludeAssetsPlugin = require('html-webpack-include-assets-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  entry: {
    app: './src/App.tsx',
  },
  output: {
    filename: '[name].bundle.js',
    path: `${__dirname}/dist`,
  },

  // Enable sourcemaps for debugging webpack's output.
  devtool: 'source-map',

  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: ['.ts', '.tsx', '.js', '.json'],
  },

  plugins: [
    new CopyWebpackPlugin([
      { from: 'node_modules/react/dist/react.js', to: './' },
      { from: 'node_modules/react-dom/dist/react-dom.js', to: './' },
    ]),
    new HtmlWebpackPlugin({
      title: 'My App',
      filename: 'index.html',
      template: './index.ejs',
      chunksSortMode(a, b) {
        const sort = {
          react: 0,
          'react-dom': 1,
          index: 2,
        }
        console.log(a.names[0], b.names[0], sort[a.names[0]], sort[b.names[0]])
        if (sort[a.names[0]] > sort[b.names[0]]) {
          return 1
        }
        if (sort[a.names[0]] < sort[b.names[0]]) {
          return -1
        }
        return 0
      },
    }),
    new HtmlWebpackIncludeAssetsPlugin({
      assets: ['react.js', 'react-dom.js'],
      append: false,
    }),
  ],

  module: {
    rules: [
      // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
      { test: /\.tsx?$/, loader: 'awesome-typescript-loader' },

      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      { enforce: 'pre', test: /\.js$/, loader: 'source-map-loader' },
    ],
  },

  // When importing a module whose path matches one of the following, just
  // assume a corresponding global variable exists and use that instead.
  // This is important because it allows us to avoid bundling all of our
  // dependencies, which allows browsers to cache those libraries between builds.
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM',
  },

  devServer: {
    proxy: {
      // proxy URLs to backend development server
      '/api': 'http://localhost:3000',
    },
    open: 'http://localhost:3001',
    historyApiFallback: true, // true for index.html upon 404, object for multiple paths
    hot: true, // hot module replacement. Depends on HotModuleReplacementPlugin
    https: false, // true for self-signed, object for cert authority
    noInfo: true, // only errors & warns on hot reload
    // ...

    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 3001,
  },
}
