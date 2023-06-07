import { Theme } from "@mui/material";
import { CSSProperties } from "react";
import { theme } from "src/theme/theme";

export const addCharacterFormStyles = {
	root: {
		background: (theme: Theme) => theme.palette.primary.dark,
		height: "calc(100vh - 100px)",
		padding: "calc(2vmin + 10px)",
		display: "flex",
		flexDirection: "column",
		gap: "30px",
		overflow: "auto"
	},
	modal: {
		width: "1500px",
		margin: "3px",
		marginBottom: "40px"
	},
	header: {
		fontSize: "calc(2vmin + 10px)",
		textAlign: "center",
		fontWeight: "700",
		color: theme.palette.primary.main
	} as CSSProperties,
	form: {
		display: "flex",
		flexDirection: "column",
		gap: "30px",
	} as CSSProperties
};