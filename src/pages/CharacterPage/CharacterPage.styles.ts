import { theme } from "src/theme/theme";

export const characterPageStyles = {
	image: {
		width: "100%",
		aspectRatio: .8,
		objectFit: "cover",
		borderRadius: "10px"
	},
	titlePublic: {
		color: theme.palette.primary.dark,
		fontWeight: "700",
		fontSize: "calc(1.5vmin + 15px)"
	},
	contentPublic: {
		color: theme.palette.secondary.dark,
		fontWeight: "600",
		fontSize: "calc(1.5vmin + 15px)"
	},
	textWrapper: {
		display: "flex",
		flexDirection: "column",
		gap: "10px"
	},
	divider: {
		color: theme.palette.primary.dark,
		fontWeight: "700",
		fontSize: "calc(1.5vmin + 15px)"
	}
};