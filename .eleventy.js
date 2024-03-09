module.exports = (config) => {
  config.setServerOptions({
    // Whether DOM diffing updates are applied where possible instead of page reloads
    domDiff: false,
    // Use a local key/certificate to opt-in to local HTTP/2 with https
    https: {
      key: "./localhost.key",
      cert: "./localhost.cert",
    },
  });

  config.addPassthroughCopy("src/assets/imgs/*.jpg");
  config.addPassthroughCopy("src/assets/imgs/*.png");
  config.addPassthroughCopy("src/favicon.ico");

  return {
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
    dir: {
      input: "src",
      ouput: "_site",
    },
  };
};
