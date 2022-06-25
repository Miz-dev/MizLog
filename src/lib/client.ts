import { createClient } from "microcms-js-sdk";

// Initialize Client SDK.
export const client = createClient({
	serviceDomain: "mizlog",
	apiKey: process.env.API_KEY,
});
