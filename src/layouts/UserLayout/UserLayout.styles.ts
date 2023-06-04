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
	},
	contentWrapper: {
		height: "inherit",
		backgroundSize: "cover",
		display: "flex",
		justifyContent: "center",
		padding: "20px 0px",
	},
	pageWrapper: {
		background: `linear-gradient(180deg, ${alpha(theme.palette.primary.main, 0.8)} 0%, ${alpha(theme.palette.primary.light, 0.8)} 100%)`,
		width: "98%",
		borderRadius: "10px",
		padding: "20px",
		maxWidth: "1300px"
	}
};