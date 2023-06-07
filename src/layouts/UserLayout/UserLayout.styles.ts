import { alpha } from "@mui/material";
import { theme } from "src/theme/theme";

export const userLayoutStyles = {
	root: {
		height: "100vh",
		minHeight: "100vh",
		maxHeight: "100vh",
		width: "100vw",
		minWidth: "100vw",
		maxWidth: "100vw",
		display: "flex",
		flexDirection: "column",
		justifyContent: "space-between",
		overflow: "hidden"
	},
	contentWrapper: {
		height: "calc(100vh - 150px)",
		backgroundSize: "cover",
		display: "flex",
		justifyContent: "center",
		padding: "20px 0px",
	},
	mapWrapper: {
		height: "calc(100vh - 150px)",
	},
	pageWrapper: {
		background: `linear-gradient(180deg, ${alpha(theme.palette.primary.light, 0.9)} 0%, ${alpha(theme.palette.primary.light, 0.9)} 100%)`,
		width: "98%",
		borderRadius: "10px",
		padding: "20px",
		maxWidth: "1300px",
		overflowY: "auto"
	}
};