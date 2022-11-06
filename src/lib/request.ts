import { Octokit } from "@octokit/core";
import type { OctokitResponse } from "@octokit/types";

import env from "@lib/env.js";

const octokit = new Octokit({
	auth: env.GITHUB_AUTH_TOKEN,
});

const request = async (
	where: string,
	_with: {} = {},
	type: string = "octokit"
): Promise<OctokitResponse<any, number> | any> => {
	try {
		console.log(`Successfully ${where}`);

		switch (type) {
			case "octokit":
				return await octokit.request(where, _with);
		}
	} catch (e) {
		console.log(`Could not ${where}`);
	}
};

export default request;
