const { setHeadlessWhen } = require('@codeceptjs/configure');
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
//setHeadlessWhen(process.env.HEADLESS);

exports.config = {
  tests: './tests/**/*.js',
  output: './output',
  helpers: {
    WebDriver: {
      host: 'localhost',
      protocol: 'http',
      port: 4444,
      url: 'https://sahibinden.com',
      browser: 'chrome',
      windowSize: "maximize",
      desiredCapabilities: {
        chromeOptions: {
          args: ['--disable-gpu' ]
        }
      }
    },
    "AssertWrapper" : {
      "require": "codeceptjs-assert"
    }
  },
  multiple: {
    parallel: {
      chunks: 2
    }
  },
  include: {
    homePage: './pages/HomePage.js',
    searchPage: './pages/SearchPage.js',
    quickSearchPage: './pages/QuickSearchPage.js'
  },
  bootstrap: null,
  mocha: {},
  name: 'Udemy',
  plugins: {
    selenoid: {
      enabled: true,
      deletePassed: true,
      autoCreate: true,
      autoStart: true,
      sessionTimeout: '30m',
      enableVideo: true,
      enableLog: true,
    },
    allure: {
    },
    wdio: {
      enabled: false,
      services: [
        'selenium-standalone',
      ],
    },
    pauseOnFail: {},
    retryFailedStep: {
      enabled: true
    },
    tryTo: {
      enabled: true
    },
    screenshotOnFail: {
      enabled: true
    }
  }
}