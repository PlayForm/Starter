// @ts-ignore
import type { CLSReportCallback } from "web-vitals";

export default (onPerfEntry?: CLSReportCallback) => {
	if (onPerfEntry && onPerfEntry instanceof Function) {
		import("web-vitals").then(
			({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
				getCLS(onPerfEntry);
				getFID(onPerfEntry);
				getFCP(onPerfEntry);
				getLCP(onPerfEntry);
				getTTFB(onPerfEntry);
			}
		);
	}
};
