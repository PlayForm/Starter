import dotenv from "dotenv";
import { z } from "zod";

const env = dotenv.config();

export default z
	.object({
		GH_AUTH_TOKEN: z.string().default(""),
	})
	.parse(env.error ? {} : process.env);
