const HtmlScreenshotReporter = require('protractor-jasmine2-screenshot-reporter');
const SpecReporter = require('jasmine-spec-reporter');

const webpackConfig = require('./webpack.dev.conf');
const args = require('yargs').argv;

const e2eBaseFolder = './test/e2e';

const config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  baseUrl: `http://localhost:${webpackConfig.devServer.port}/#!`,
  capabilities: {
    browserName: 'firefox'
  },
  framework: 'jasmine2',
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 600 * 1000,
    // remove ugly protractor dot reporter
    print: () => {}
  },
  specs: `${e2eBaseFolder}/specs/*.spec.js`,
  onPrepare: () => {
    // support ES6, need to put this line in onPrepare to make line number
    // in error report correct
        require('babel-core/register'); // eslint-disable-line
        const helper = require('./test/e2e/helper'); // eslint-disable-line

    browser._BasePageObject = helper.BasePageObject; // e2e测试的父类,放在全局brower对象里
    browser._ = new helper.E2EHelper(); // 自定义的一些公共方法,放在全局brower对象里
    if (!args.ci) {
      // screenshot reporter
      jasmine.getEnv().addReporter(new HtmlScreenshotReporter({
        dest: `${e2eBaseFolder}/screenshots`,
        filename: 'e2e-report.html',
        captureOnlyFailedSpecs: true,
        reportOnlyFailedSpecs: false,
        pathBuilder: currentSpec =>
        // TODO: can not get browser name due to
        // https://github.com/mlison/protractor-jasmine2-screenshot-reporter/issues/4
          currentSpec.description.replace(/[ :]/g, '-')

      }));
    }
    // add jasmine spec reporter
    jasmine.getEnv().addReporter(new SpecReporter({
      displayStacktrace: 'all',
      displayFailuresSummary: false
    }));
    beforeEach(() => {
      // add jasmine自定义Matchers（匹配器）
      jasmine.addMatchers(helper.customMatchers);
    });
  },
  params: {
    timeout: 100000
  }
};

exports.config = config;
