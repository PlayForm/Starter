import type { AstroUserConfig } from "astro";
import compress from "astro-compress";
import critters from "astro-critters";

import sitemap from "@astrojs/sitemap";

export default (): AstroUserConfig => ({
	integrations: [
		sitemap(),
		critters(),
		compress({
			html: true,
			logger: 1,
		}),
	],
});
