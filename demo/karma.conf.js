const path = require('path');
const webpack = require('webpack');
const args = require('yargs').argv;

const unitTestEntry = 'test/unit/helper.js';
// run multiple times in watch mode
const singleRun = !args.watch;
// use phantomjs in watch mode
const browser = (args.watch || args.ci) ? 'PhantomJS' : 'Chrome';
// load babel polyfill for phantomjs
console.log(unitTestEntry);
const files = browser === 'PhantomJS' ? [
  'node_modules/babel-core/browser-polyfill.js',
  unitTestEntry
] : [
  unitTestEntry
];

const include = [
  path.resolve('./src')
];

const preLoaders = [
  // Process test code with Babel
  { test: /\.spec\.js$/, loader: 'babel-loader', include },
  // Process all non-test code with Isparta
  { test: /\.js$/, loader: 'babel-loader!istanbul-instrumenter-loader?esModules=true', include, exclude: /\.spec\.js$/ }
];
const loaders = [
  { test: /\.less$/, loader: 'style-loader!css-loader!less-loader' },
  { test: /\.html/, loader: 'html-loader' },
  { test: /\.(png|jpg)$/, loader: 'null' }
];
const processors = {};
processors[unitTestEntry] = ['webpack', 'sourcemap'];
processors['src/**/*.js'] = ['webpack', 'sourcemap'];

// for watch mode, only show text coverage
const reporters = args.watch ? [
  'mocha', 'coverage'
] : [
  'mocha', 'coverage', 'junit'
];
const coverageReporters = args.watch ? [
  { type: 'text-summary' }
] : [
  { type: 'lcov', subdir: '.' },
  { type: 'text-summary' }
];

module.exports = config => {
  config.set({
    basePath: '.',
    frameworks: ['mocha', 'chai'],
    exclude: [],
    files,
    webpack: {
      devtool: 'inline-source-map',
      module: {
        rules: preLoaders.concat(loaders)
      },
      cache: true,
      plugins: [
        new webpack.ProvidePlugin({
          $: 'jquery',
          jQuery: 'jquery',
          'window.jQuery': 'jquery'
        })
      ]
    },
    preprocessors: processors,
    reporters,
    coverageReporter: {
      dir: 'test/unit/results/coverage',
      reporters: coverageReporters
    },
    junitReporter: {
      outputDir: 'test/unit/results/junit'
    },
    reportSlowerThan: 500,
    singleRun,
    browsers: [
      browser
    ]
  });
};
