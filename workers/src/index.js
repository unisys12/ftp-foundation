/**
 * Let's try to make ../src/_data/dogs.js a worker
 *
 * - process.env.ORG_ID is the Organization ID from Rescue Groups Dot Org
 * - process.env.RESCUE_GROUPS_API_KEY is the API Key used for accessing their API
 */

export default {
	async fetch(request, env, ctx) {
		let url = `https://api.rescuegroups.org/v5/public/orgs/${env.ORG_ID}/animals/search/available/`;
		let body = {
			"data": {
				"filterRadius": {
				"miles": 25,
				"postalcode": 38834
				}
			}
		};

		return await fetch(url, {
			method: "POST",
			headers: {
				'Authorization': `${env.RESCUE_GROUPS_API_KEY}`,
				'Content-Type': "application/vnd.api+json"
			},
			body: JSON.stringify(body)
		});
	},
};
