const { defineConfig } = require("@vue/cli-service");

module.exports = defineConfig({
  transpileDependencies: true,
  chainWebpack: (config) => {
    config.plugin("html").tap((args) => {
      args[0].title = "Andrew Butov Fullstack JS Developer";
      args[0].sentryDSN = process.env.VUE_APP_SENTRY_DSN;
      return args;
    });
    config.module
      .rule("pdf")
      .test(/\.pdf$/)
      .use("file-loader")
      .loader("file-loader");
  },
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
