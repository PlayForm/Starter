import sitemap from "@astrojs/sitemap";
import compress from "astro-compress";
import critters from "astro-critters";

export default /** @type {import('astro').AstroUserConfig} */ {
	// TODO Place your site URL here
	// site: "",
	integrations: [
		sitemap(),
		critters(),
		compress({
			logger: 1,
		}),
	],
};
