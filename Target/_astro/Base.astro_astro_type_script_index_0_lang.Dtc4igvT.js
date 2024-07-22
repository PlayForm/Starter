const p = "modulepreload",
	f = function (o) {
		return "/" + o;
	},
	c = {},
	h = function (l, s, E) {
		let a = Promise.resolve();
		if (s && s.length > 0) {
			document.getElementsByTagName("link");
			const r = document.querySelector("meta[property=csp-nonce]"),
				n = r?.nonce || r?.getAttribute("nonce");
			a = Promise.all(
				s.map((e) => {
					if (((e = f(e)), e in c)) return;
					c[e] = !0;
					const i = e.endsWith(".css"),
						u = i ? '[rel="stylesheet"]' : "";
					if (document.querySelector(`link[href="${e}"]${u}`)) return;
					const t = document.createElement("link");
					if (
						((t.rel = i ? "stylesheet" : p),
						i || ((t.as = "script"), (t.crossOrigin = "")),
						(t.href = e),
						n && t.setAttribute("nonce", n),
						document.head.appendChild(t),
						i)
					)
						return new Promise((d, m) => {
							t.addEventListener("load", d),
								t.addEventListener("error", () =>
									m(
										new Error(
											`Unable to preload CSS for ${e}`,
										),
									),
								);
						});
				}),
			);
		}
		return a
			.then(() => l())
			.catch((r) => {
				const n = new Event("vite:preloadError", { cancelable: !0 });
				if (
					((n.payload = r),
					window.dispatchEvent(n),
					!n.defaultPrevented)
				)
					throw r;
			});
	};
(
	await h(async () => {
		const { initializeApp: o } = await import("./index.esm.BoasBFnU.js");
		return { initializeApp: o };
	}, [])
).initializeApp({
	apiKey: "",
	appId: "",
	authDomain: "",
	databaseURL: "",
	measurementId: "",
	messagingSenderId: "",
	projectId: "",
	storageBucket: "",
});
//# sourceMappingURL=Base.astro_astro_type_script_index_0_lang.Dtc4igvT.js.map
