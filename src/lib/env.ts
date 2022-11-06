import dotenv from "dotenv";
import { z } from "zod";

const env = dotenv.config();

export default z
	.object({
		GITHUB_AUTH_TOKEN: z.string().default(""),
	})
	.parse(env.error ? {} : env.parsed);
