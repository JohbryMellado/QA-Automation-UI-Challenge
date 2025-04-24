exports.config = {
    runner: 'local',
    specs: [
      './test/**/*.js'
    ],
    maxInstances: 1,
    capabilities: [{
      maxInstances: 1,
      browserName: 'chrome'
    }],
    logLevel: 'info',
    framework: 'mocha',
    mochaOpts: {
      ui: 'bdd',
      timeout: 60000
    },
    reporters: ['spec'],
    services: ['chromedriver'],
    baseUrl: 'https://www.saucedemo.com'
  };