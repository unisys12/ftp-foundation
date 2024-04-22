import { routeRequest } from "./router";

export default {
	async fetch(request, env, ctx) {
		return routeRequest(request, env, ctx);
	},
};
