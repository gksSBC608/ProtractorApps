import { Config, browser } from "protractor"
import * as reporter from "cucumber-html-reporter";

export let config: Config = {
  // seleniumAddress: 'http://localhost:4444/wd/hub',
  directConnect: true,
  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'),
  capabilities: {
    browserName: 'chrome'
  },
  // specs: ['../features/homepage.feature'],
  specs: ['../features/*.feature'],

  // You could set no globals to true to avoid jQuery '$' and protractor '$'
  // collisions on the global namespace.
  noGlobals: true,
  cucumberOpts: {
    // require step definitions
    //tags: ["@WrongEntry"],
    // tags: ["@FullFlow"],
    // tags: ["@WrongEntry or @FullFlow"],
    //tags: ["@Shopping"],
    format: 'json:./cucumberreport.json',

    require: [
      // Specify path of timeout.js file which will act as implicit wait, 
      // this helps Protractor-Cucumber framework 
      // to run synchronously
      './stepDefinitions/*.js', // accepts a glob,
    ]
  },
  onPrepare: async() => {

    await browser.manage().window().maximize();
    await browser.sleep(1890);

  },
  onComplete: () => {
    var options = {
      theme: 'bootstrap',
      jsonFile: './cucumberreport.json',
      output: './cucumber_report.html',
      reportSuiteAsScenarios: true,
      launchReport: true,
      metadata: {
        "App Version": "0.3.2",
        "Test Environment": "STAGING",
        "Browser": "Chrome  54.0.2840.98",
        "Platform": "Windows 10",
        "Parallel": "Scenarios",
        "Executed": "Remote"
      }
    };
    reporter.generate(options);
  }
};