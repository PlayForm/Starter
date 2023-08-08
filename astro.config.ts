import PreFetch from "@astrojs/prefetch";
import SiteMap from "@astrojs/sitemap";
import Compress from "astro-compress";
import Critters from "astro-critters";
import ROME from "astro-rome";
import { defineConfig } from "astro/config";
import Worker from "astrojs-service-worker";

export default defineConfig({
	srcDir: "./Source",
	publicDir: "./Public",
	outDir: "./Target",
	// TODO Place your site URL here
	// site: "",
	experimental: {
		assets: true,
		viewTransitions: true,
	},
	compressHTML: true,
	integrations: [
		import.meta.env.MODE === "production" ? Worker() : null,
		SiteMap(),
		Critters({ Logger: 1 }),
		PreFetch(),
		ROME({ Logger: 1 }),
		Compress({ Logger: 1 }),
	],
	vite: {
		build: {
			sourcemap: true,
		},
	},
});
