const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {

    },
    specPattern: 'cypress/integration/search/*.js'
  },
  env: {
    url: 'https://www.amazon.co.uk'
  },
  retries: { openMode:1,runMode:1 } //to retry the test on failure
});
