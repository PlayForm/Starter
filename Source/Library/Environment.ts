(await import("dotenv")).config();

export default Zod.z
	.object({
		Token: Zod.z.string().default(""),
	})
	.parse(process.env);

export const { default: Zod } = await import("zod");
