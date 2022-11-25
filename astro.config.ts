import sitemap from "@astrojs/sitemap";
import compress from "astro-compress";
import critters from "astro-critters";

import rome from "astro-rome";

export default {
	site: "https://nikolahristov.tech",
	integrations: [sitemap(), critters(), rome(), compress()],
};
