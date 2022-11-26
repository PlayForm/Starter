import compress from "astro-compress";
import critters from "astro-critters";
import rome from "astro-rome";

import sitemap from "@astrojs/sitemap";

export default {
	// TODO Place your site URL here
	// site: "",
	integrations: [sitemap(), critters(), rome(), compress()],
};
