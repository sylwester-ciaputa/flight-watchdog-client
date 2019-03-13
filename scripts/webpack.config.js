const path = require('path')

const serverConfig = {
  mode: 'development',
  optimization: {
    minimize: false
  },
  entry: {
    export: path.join(__dirname, 'exportTranslations.ts'),
    import: path.join(__dirname, 'importTranslations.ts')
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.ts', '.tsx']
  },
  output: {
    libraryTarget: 'commonjs',
    path: path.join(__dirname, '../../.webpack-scripts'),
    filename: '[name].js'
  },
  target: 'node',
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        loader: 'babel-loader',
        options: {
          presets: [['@babel/preset-env', { targets: { node: '8.10' } }], '@babel/typescript', '@babel/preset-react'],
          plugins: [
            '@babel/proposal-class-properties',
            '@babel/proposal-object-rest-spread',
            [
              'module-resolver',
              {
                root: ['./src'],
                alias: {
                  shared: './src/shared',
                  'api-server': './src/api-server',
                  tests: './src/tests'
                }
              }
            ]
          ]
        }
      }
    ]
  },
  stats: 'minimal'
}

module.exports = serverConfig
