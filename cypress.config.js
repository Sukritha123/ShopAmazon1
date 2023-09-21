const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {

    },
    specPattern: 'cypress/integration/*/*.js'
    ,experimentalOriginDependencies: true
  }
//  ,retries: { openMode:1,runMode:1 } //to retry the test on failure
});
