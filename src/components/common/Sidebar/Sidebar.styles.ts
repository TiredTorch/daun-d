import { Theme } from "@mui/material";
import { theme } from "src/theme/theme";

export const sidebarStyles = {
	root: {
		background: (theme: Theme) => theme.palette.secondary.main,
		padding: "10px"
	},
	draw: {
		[theme.breakpoints.up("sm")]: {
			display: "none"
		}
	},
	list: {
		display: "flex",
		flexDirection: "column",
		gap: "1vmin",
		justifyContent: "flex-start",
	},
	listItem: {
		fontSize: "calc(2vmin + 10px)",
		color: theme.palette.primary.dark,
		fontWeight: 700,
		textDecoration: "none",
	}
};