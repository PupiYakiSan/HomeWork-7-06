const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "http://localhost:3000",
    setupNodeEvents(on, config) {
      // return { retries: 2 };
    },
  },
  viewportWidth: 720,
  viewportHeight: 1280,
});
