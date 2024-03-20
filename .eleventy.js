const Fetch = require("@11ty/eleventy-fetch");

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

  config.addAsyncShortcode("currentDog", async (id) => {
    const res = await selectedDog(id);
    let pictures = new Array;
    const selectedID = res.data.map((x) => x.id);
    
    res.included.map((items) => {
      if (selectedID == id && items.type == 'pictures') {
        pictures.push(items)
      }
    });
      
    return pictures.map((x) => `
      <div class="group block overflow-hidden">
        <img
          src="${x.attributes.original.url}"
          alt="foster image"
          class="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-auto"
        />
      </div>`)
  });

  return {
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
    dir: {
      input: "src",
      ouput: "_site",
    },
  };

  async function selectedDog(id) {
    let url = `https://api.rescuegroups.org/v5/public/orgs/11256/animals/${id}`;

    try {
        return await Fetch(url, {
            duration: "15m",
            type: "json",
            fetchOptions: {
                method: "GET",
                headers: {
                    'Authorization': "DXYRIHS8",
                    'Content-Type': "application/vnd.api+json"
                }
            }
        })
    } catch (error) {
        console.error(`There was an error fetching your dogs from RescueGroups.org: ${error}`);
    }
  };
};
