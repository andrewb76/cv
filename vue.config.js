const { defineConfig } = require("@vue/cli-service");
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = defineConfig({
  transpileDependencies: true,
  chainWebpack: (config) => {
    config.plugin("html").tap((args) => {
      args[0].title = "Andrew Butov Fullstack JS Developer";
      return args;
    });
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html",
    }),
  ],
  pluginOptions: {
    i18n: {
      locale: "en",
      fallbackLocale: "ru",
      localeDir: "locales",
      enableLegacy: false,
      runtimeOnly: false,
      compositionOnly: false,
      fullInstall: true,
    },
  },
});
