// @ts-ignore
import type { CLSReportCallback } from "web-vitals";

export default async (onPerfEntry?: CLSReportCallback) => {
	if (onPerfEntry && onPerfEntry instanceof Function) {
		const { getCLS, getFID, getFCP, getLCP, getTTFB } = await import(
			"web-vitals"
		);

		getCLS(onPerfEntry);
		getFID(onPerfEntry);
		getFCP(onPerfEntry);
		getLCP(onPerfEntry);
		getTTFB(onPerfEntry);
	}
};
