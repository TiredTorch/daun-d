import { theme } from "src/theme/theme";

export const charactersPageItemStyles = {
	root: {
		background: theme.palette.primary.dark,
		maxHeight: "200px",
		minHeight: "200px",
		height: "200px",
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		borderRadius: "10px 10px 10px 10px",
		transition: "box-shadow .4s",
		"&:hover": {
			boxShadow: `0px 0px 52px 1px ${theme.palette.primary.dark}`,
			transition: "box-shadow .4s"
		},
	},
	image: {
		width: "100%",
		maxHeight: "150px",
		minHeight: "150px",
		height: "150px",
		objectFit: "cover",
		borderRadius: "10px 10px 0px 0px"
	},
	text: {
		fontSize: "calc(1.5vmin + 15px)",
		textDecoration: "none",
		color: theme.palette.primary.light
	}
};