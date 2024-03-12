const Fetch = require("@11ty/eleventy-fetch");

module.exports = async () => {
    let url = "https://api.rescuegroups.org/v5/public/orgs/11256/animals/search/available/";
    let body = {
        "data": {
          "filterRadius": {
            "miles": 25,
            "postalcode": 38834
          }
        }
      }

    try {
        return await Fetch(url, {
            duration: "5m",
            type: "json",
            fetchOptions: {
                method: "POST",
                headers: {
                    'Authorization': "DXYRIHS8",
                    'Content-Type': "application/vnd.api+json"
                },
                body: JSON.stringify(body)
            }
        })
    } catch (error) {
        console.error(`There was an error fetching your dogs from RescueGroups.org: ${error}`);
    }
}