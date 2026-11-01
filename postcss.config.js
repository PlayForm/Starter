// @ts-nocheck

// The alias table mirrors the `paths` that `@playform/build` defines in its
// tsconfig, so that `postcss-import` resolves the same `@Stylesheet/`,
// `@Script/`, ... specifiers that Vite resolves through tsconfig `paths`.
const { resolve: Resolve } = require("path");

const Aliases = {
	"@Asset/": "Source/Asset/",
	"@Class/": "Source/Class/",
	"@Component/": "Source/Component/",
	"@Content/": "Source/Content/",
	"@Context/": "Source/Context/",
	"@Element/": "Source/Element/",
	"@Function/": "Source/Function/",
	"@Interface/": "Source/Interface/",
	"@Layout/": "Source/Layout/",
	"@Library/": "Source/Library/",
	"@Notation/": "Source/Notation/",
	"@Option/": "Source/Option/",
	"@Page/": "Source/pages/",
	"@Script/": "Source/Script/",
	"@Stylesheet/": "Source/Stylesheet/",
	"@Target/": "Source/Target/",
	"@Test/": "Source/Test/",
	"@Type/": "Source/Type/",
	"@Variable/": "Source/Variable/",
};

// Resolve `@Alias/File` imports to absolute paths inside `Source/`; anything
// else (relative paths, package imports) is returned as-is so that
// `postcss-import`'s default resolver handles it.
function ResolveAlias(Id) {
	for (const [Alias, Directory] of Object.entries(Aliases)) {
		if (Id.startsWith(Alias)) {
			return Resolve(Directory, Id.slice(Alias.length));
		}
	}

	return Id;
}

module.exports = {
	plugins: [
		require("postcss-import")({
			resolve: ResolveAlias,
		}),
		require("postcss-url"),
		require("tailwindcss/nesting"),
		require("tailwindcss")("./tailwind.config.js"),
		require("postcss-combine-media-query"),
		// `postcss-combine-duplicated-selectors` v11 is ESM-first: the CommonJS
		// `require()` yields `{ __esModule, default }`, so the callable plugin is
		// the `.default` export. Calling `require(...)` directly throws
		// "require(...) is not a function" while PostCSS loads this config.
		require("postcss-combine-duplicated-selectors").default({
			removeDuplicatedProperties: true,
			removeDuplicatedValues: false,
		}),
		require("autoprefixer"),
		require("cssnano")({ preset: "advanced" }),
		require("postcss-reporter"),
	],
};
