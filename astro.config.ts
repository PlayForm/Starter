export default (await import("astro/config")).defineConfig({
	srcDir: "./Source",
	publicDir: "./Public",
	outDir: "./Target",
	// TODO Place your site URL here
	// site: "",
	compressHTML: false,
	integrations: [
		import.meta.env.MODE === "production"
			? (await import("astrojs-service-worker")).default()
			: null,
		(await import("@astrojs/sitemap")).default(),
		(await import("astro-critters")).default({ Logger: 1 }),
		(await import("@astrojs/prefetch")).default(),
		(await import("astro-biome")).default({ Logger: 1 }),
		(await import("compress-astro")).default({ Logger: 1 }),
	],
	vite: {
		build: {
			sourcemap: true,
		},
	},
}) as typeof defineConfig;

import type { defineConfig } from "astro/config";
