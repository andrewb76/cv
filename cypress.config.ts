import { defineConfig } from "cypress";
import createBundler from "@bahmutov/cypress-esbuild-preprocessor";
import { addCucumberPreprocessorPlugin } from "@badeball/cypress-cucumber-preprocessor";
import createEsbuildPlugin from "@badeball/cypress-cucumber-preprocessor/esbuild";

export default defineConfig({
  component: {
    devServer: {
      framework: "vue-cli",
      bundler: "webpack",
    },
  },

  e2e: {
    baseUrl: "http://localhost:8080",
    chromeWebSecurity: false,
    excludeSpecPattern: "*.{js|ts}",
    specPattern: "**/*.feature",
    // setupNodeEvents(
    //   on: Cypress.PluginEvents,
    //   config: Cypress.PluginConfigOptions
    // ): Promise<Cypress.PluginConfigOptions> {
    //   const cucumber = require("cypress-cucumber-preprocessor").default;
    //   const browserify = require("@cypress/browserify-preprocessor");
    //   const options = {
    //     ...browserify.defaultOptions,
    //     typescript: require.resolve("typescript"),
    //     // step_definitions
    //   };
    //   on("file:preprocessor", cucumber(options));
    //   return config;
    // },
    async setupNodeEvents(
      on: Cypress.PluginEvents,
      config: Cypress.PluginConfigOptions
    ): Promise<Cypress.PluginConfigOptions> {
      // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
      await addCucumberPreprocessorPlugin(on, config);

      on(
        "file:preprocessor",
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        })
      );

      // Make sure to return the config object as it might have been modified by the plugin.
      return config;
    },
  },
});