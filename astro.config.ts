import sitemap from "@astrojs/sitemap";
import compress from "astro-compress";
import critters from "astro-critters";

export default {
	site: "https://nikolahristov.tech",
	integrations: [
		sitemap(),
		critters(),
		compress({
			logger: 1,
		}),
	],
};
