const reporter = require("cucumber-html-reporter");
const options = {
  theme: "bootstrap",
  jsonFile: "json_reports/2020-06-19_01-27-23.json",
  output: "cucumber_report.html",
  reportSuiteAsScenarios: true,
  launchReport: true,
};

reporter.generate(options);
