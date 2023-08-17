import * as dotenv from "dotenv";
import { z } from "zod";

dotenv.config();

export default z
	.object({
		Token: z.string().default(""),
	})
	.parse(process.env);
