import { SxProps, Theme } from "@mui/material";

export const footerStyles: Record<string, SxProps<Theme>> = {
	root: {
		background: theme => theme.palette.primary.dark,
		color: theme => theme.palette.primary.light,
		width: "100vw",
		height: "50px",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
	}
};