const { defineConfig } = require("cypress");
const cucumber = require("cypress-cucumber-preprocessor").default;
module.exports = defineConfig({
  e2e: {
    specPattern: "**/*.feature",
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on("file:preprocessor", cucumber());
    },
    baseUrl: 'https://magento.softwaretestingboard.com',
    // viewportWidth : 550,
    // viewportHeight : 550
    video:false,
    videoCompression:0,
    videosFolder:"MyRecords",
    trashAssetsBeforeRuns:true, 
    reporter:"mochawesome",
    reporterOptions:{
      reportDir:"cypress/myReporter",
      overwrite:false,
      html:true,
      JSON:false,
      timestamp:"mmddyyy-HHMMss"
    }
  },
});
