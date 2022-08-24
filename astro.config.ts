import sitemap from "@astrojs/sitemap";
import critters from "astro-critters";
import compress from "astro-compress";

import type { AstroUserConfig } from "astro";

export default {
	// TODO Place your site URL here
	// site: "",
	integrations: [
		sitemap(),
		critters(),
		compress({
			logger: 1,
		}),
	],
} as AstroUserConfig;
