import { Octokit } from "@octokit/core";
import type { OctokitResponse } from "@octokit/types";

import env from "@lib/env.js";

const octokit = new Octokit({
	auth: env.GH_AUTH_TOKEN,
});

const request = async (
	where: string,
	// rome-ignore lint:
	_with: any = {},
	type: string = "octokit"
	// rome-ignore lint:
): Promise<OctokitResponse<any, number> | any> => {
	try {
		console.log(`Successfully ${where}`);

		switch (type) {
			case "octokit":
				return await octokit.request(where, _with);
		}
	} catch (_e) {
		console.log(`Could not ${where}`);
	}
};

export default request;
