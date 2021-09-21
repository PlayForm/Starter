import sitemap from "@astrojs/sitemap";
import compress from "astro-compress";
import critters from "astro-critters";
import { defineConfig } from "astro/config";

export default defineConfig({
	// TODO Place your site URL here
	// site: "",
	experimental: {
		integrations: true,
	},
	integrations: [sitemap(), critters(), compress()],
});
