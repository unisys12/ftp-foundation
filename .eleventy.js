import EleventyFetch from "@11ty/eleventy-fetch";
import "dotenv/config";
export default (config) => {
  config.setServerOptions({
    // Whether DOM diffing updates are applied where possible instead of page reloads
    domDiff: false,
  });

  config.addPassthroughCopy("src/assets/imgs/*.jpg");
  config.addPassthroughCopy("src/assets/imgs/*.png");
  config.addPassthroughCopy("src/assets/fonts/*.woff2");
  config.addPassthroughCopy("src/favicon.ico");

  const imgComponent = (img) => {
    return `<sl-carousel-item>
              <img
                src="${img.attributes.original.url}"
                alt="foster image"
                class="object-contain"
              />
            </sl-carousel-item>`;
  };

  config.addAsyncShortcode("currentDog", async function (id) {
    const res = await selectedDog(id);
    let pictures = [];
    const selectedID = res.data.map((x) => x.id);

    res.included.map((items) => {
      if (selectedID == id && items.type == "pictures") {
        pictures.push(items);
      }
    });

    return pictures.map((x) => imgComponent(x));
  });

  config.addShortcode("currentYear", () => {
    const $date = new Date();
    return `${$date.getFullYear()}`;
  });

  return {
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
    dir: {
      input: "src",
      output: "_site",
    },
  };

  async function selectedDog(id) {
    let url = `https://api.rescuegroups.org/v5/public/orgs/${process.env.ORG_ID}/animals/${id}`;

    try {
      return await EleventyFetch(url, {
        duration: "15m",
        type: "json",
        fetchOptions: {
          method: "GET",
          headers: {
            Authorization: `${process.env.RESCUE_GROUPS_API_KEY}`,
            "Content-Type": "application/vnd.api+json",
          },
        },
      });
    } catch (error) {
      console.error(
        `There was an error fetching your dogs from RescueGroups.org: ${error}`
      );
    }
  }
};
