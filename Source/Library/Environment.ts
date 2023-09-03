import { config } from "dotenv";
import { z } from "zod";

config();

export default z
	.object({
		Token: z.string().default(""),
	})
	.parse(process.env);
