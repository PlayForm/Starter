export default {
	plugins: [
		(await import("postcss-import")).default,
		(await import("postcss-url")).default,
		(await import("tailwindcss")).default,
		(await import("postcss-combine-media-query")).default,
		(await import("postcss-combine-duplicated-selectors")).default({
			removeDuplicatedProperties: true,
			removeDuplicatedValues: false,
		}),
		(await import("autoprefixer")).default,
		(await import("cssnano")).default({ preset: "advanced" }),
		(await import("postcss-reporter")).default,
	],
};
