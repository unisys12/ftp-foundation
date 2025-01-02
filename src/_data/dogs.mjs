import EleventyFetch from '@11ty/eleventy-fetch';
import 'dotenv/config'

export default async () => {
    let url = `https://api.rescuegroups.org/v5/public/orgs/${process.env.ORG_ID}/animals/search/available/`;
    let body = {
        "data": {
          "filterRadius": {
            "miles": 25,
            "postalcode": 38834
          }
        }
      }

    try {
        return await EleventyFetch(url, {
            duration: "5m",
            type: "json",
            fetchOptions: {
                method: "POST",
                headers: {
                    'Authorization': `${process.env.RESCUE_GROUPS_API_KEY}`,
                    'Content-Type': "application/vnd.api+json"
                },
                body: JSON.stringify(body)
            }
        })
    } catch (error) {
        console.error(`There was an error fetching your dogs from RescueGroups.org: ${error}`);
    }
}