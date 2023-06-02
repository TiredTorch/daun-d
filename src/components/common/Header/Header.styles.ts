import { Theme } from "@mui/material";
import { theme } from "src/theme/theme";

export const headerStyles = {
	root: {
		background: (theme: Theme) => theme.palette.primary.main,
		maxHeight: "100px",
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		padding: "0px 20px",
		position: "relative"
	},
	logo: {
		height: "100px",
		width: "100px",
		cursor: "pointer"
	},
	list: {
		display: "flex",
		flexDirection: "row",
		gap: "1vmin",
		justifyContent: "flex-start",
		[theme.breakpoints.down("sm")]: {
			display: "none"
		}
	},
	listItem: {
		fontSize: "calc(1.7vmin + 5px)",
		color: theme.palette.primary.light,
		fontWeight: 700,
		textDecoration: "none"
	}
};