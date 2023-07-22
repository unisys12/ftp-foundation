module.exports = (config) => {
  config.setServerOptions({
    // Whether DOM diffing updates are applied where possible instead of page reloads
    domDiff: false,
  });

  config.addPassthroughCopy("src/assets/imgs/*.jpg");

  return {
    dir: {
      input: "src",
      ouput: "_site",
    },
  };
};
