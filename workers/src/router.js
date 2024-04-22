import { getDogs } from "./routes/getDogs";

export async function routeRequest(request, env, ctx) {
	const url = new URL(request.url);
	const path = url.pathname.split("/").slice(1);

	switch (path[0]) {
		case "dogs":
		return getDogs(request, env, ctx);
		default:
			return new Response("Route not found for path: " . path, { status: 404 })
	}
}
