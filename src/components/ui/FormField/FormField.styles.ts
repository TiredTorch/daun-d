import { theme } from "src/theme/theme";

export const formFieldStyles = {
	checkboxText: {
		color: theme.palette.primary.main,
		fontWeight: "600",
		fontSize: "calc(1vmin + 10px)"
	},
	checkboxWrapper: {
		display: "flex",
		justifyContent: "center",
		alignItems: "center"
	},
	fileInput: {
		width: "100%",
		color: theme.palette.primary.light,
		fontSize: "calc(1vmin + 10px)"
	}
};