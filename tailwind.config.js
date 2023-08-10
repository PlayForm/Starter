module.exports = {
	content: [
		"./Public/**/*.html",
		"./Source/**/*.{astro,js,jsx,ts,tsx,vue,svelte}",
	],
	darkMode: "media",
	theme: {
		container: {
			center: true,
		},
		extend: {
			typography: {
				DEFAULT: {
					css: {
						a: {
							"font-weight": "400",
						},
					},
				},
			},
		},
	},
	variants: {},
	plugins: [
		require("@tailwindcss/forms"),
		require("@tailwindcss/typography"),
		require("@tailwindcss/aspect-ratio"),
	],
};
