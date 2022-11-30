import { defineConfig } from "astro/config";

import compress from "astro-compress";
import critters from "astro-critters";
import prefetch from "@astrojs/prefetch";
import rome from "astro-rome";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
	site: "https://image.wtf",
	integrations: [sitemap(), critters(), prefetch(), rome(), compress()],
});
