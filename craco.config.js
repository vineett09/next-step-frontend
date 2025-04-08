module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      webpackConfig.ignoreWarnings = [
        (warning) =>
          warning.message.includes("source map") &&
          warning.module &&
          warning.module.resource.includes("html2pdf.js"),
      ];
      return webpackConfig;
    },
  },
};
