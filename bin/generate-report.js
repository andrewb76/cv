#!/usr/bin/env node

const report = require("multiple-cucumber-html-reporter");

report.generate({
  jsonDir: "logs",
  reportPath: "./reports/cucumber-html-report.html",
  metadata: {
    platform: {
      name: "Linux",
    },
  },
});
