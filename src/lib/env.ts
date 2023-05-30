import * as dotenv from "dotenv";
import { z } from "zod";

dotenv.config();

export default z
	.object({
		GH_AUTH_TOKEN: z.string().default(""),
	})
	.parse(process.env);
