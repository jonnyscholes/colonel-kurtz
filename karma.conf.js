var Webpack        = require('webpack')
var webpack_config = require('./webpack.config')
var isIntegration  = process.env.CONTINUOUS_INTEGRATION === 'true'
var noCoverage     = process.env.NO_COVERAGE === 'true'

module.exports = function(config) {

  if (isIntegration) {
    console.log('Running in integration')
  }

  if (noCoverage) {
    console.log('Test coverage has been disabled')
  }

  config.set({
    browsers: [ 'Chrome' ],

    browserNoActivityTimeout: 30000,

    singleRun: isIntegration,

    frameworks: [ 'mocha', 'sinon-chai' ],

    files: [
      './test/**/*.test.js*'
    ],

    preprocessors: {
      './test/**/*.test.js*' : [ 'webpack', 'sourcemap' ]
    },

    reporters: noCoverage ? [ 'mocha' ] : [ 'mocha', 'coverage' ],

    mochaReporter: {
      output: 'minimal'
    },

    webpack: {
      devtool : 'inline-source-map',

      plugins: [
        new Webpack.ProvidePlugin({
          React     : 'react',
          TestUtils : 'react-addons-test-utils'
        })
      ],

      resolve: webpack_config.resolve,

      module: {
        loaders: [
          {
            test    : /\.jsx*$/,
            exclude : /node_modules/,
            loader  : 'babel',
            query   : {
              auxiliaryCommentBefore: "istanbul ignore next",
              optional: [ 'runtime' ]
            }
          }
        ],
        postLoaders: noCoverage ? [] : [{
          test: /\.jsx*$/,
          exclude: /(__tests__|node_modules)/,
          loader: 'istanbul-instrumenter'
        }]
      }
    },

    webpackServer: {
      noInfo: true
    }
  });
};
