module.exports = (config) => {
  config.setServerOptions({
    // Whether DOM diffing updates are applied where possible instead of page reloads
    domDiff: false,
  });

  config.addPassthroughCopy("src/assets/imgs/*.jpg");
  config.addPassthroughCopy("src/favicon.ico");

  return {
    dir: {
      input: "src",
      ouput: "_site",
    },
  };
};
