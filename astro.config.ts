import prefetch from "@astrojs/prefetch";
import sitemap from "@astrojs/sitemap";
import Compress from "astro-compress";
import critters from "astro-critters";
import ROME from "astro-rome";
import { defineConfig } from "astro/config";
import worker from "astrojs-service-worker";

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
		import.meta.env.MODE === "production" ? worker() : null,
		sitemap(),
		critters({ logger: 1 }),
		prefetch(),
		ROME({ logger: 1 }),
		Compress({ logger: 1 }),
	],
	vite: {
		build: {
			sourcemap: true,
		},
	},
});
