import { theme } from "src/theme/theme";
import bgMap from "../../assets/fog.gif";

export const mapPageStyles = {
	root: {
		backgroundImage: `url(${bgMap})`,
		backgroundSize: "cover",
		width: "100%",
		height: "100%"
	},
	drawer: {
		height: "calc(100vh - 150px)",
		top: "100px",
		boxShadow: "none",
		background: theme.palette.primary.dark,
		boxSizing: "border-box",
		borderTop: `2px dashed ${theme.palette.primary.main}`,
		borderBottom: `2px dashed ${theme.palette.primary.main}`,
		borderLeft: `2px dashed ${theme.palette.primary.main}`,
		maxWidth: "400px",
		padding: "20px 10px",
		overflowY: "auto"
	},
	title: {
		fontSize: "calc(2vmin + 12px)",
		marginBottom: "20px",
		color: theme.palette.primary.light,
		fontWeight: "700"
	},
	about: {
		fontSize: "calc(1.5vmin + 12px)",
		color: theme.palette.primary.light

	},
	text: {
		fontSize: "calc(1.2vmin + 9px)",
		color: theme.palette.primary.light,
		fontStyle: "italic"
	},
	buttonWrapper: {
		display: "flex",
		justifyContent: "space-between"
	},
	button: {
		height: "50px",
		width: "50px"
	}
};