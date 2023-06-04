import { theme } from "src/theme/theme";
import mapBg from "../../../assets/map-bg.jpg";

export const parallaxContainerStyles = {
	root: (x: number, y: number) => ({
		height: "100vh",
		width: "100vw",
		zIndex: -1,
		position: "absolute",
		top: 0,
		left: 0,
		backgroundImage: `url(${mapBg})`,
		backgroundSize: "cover",
		backgroundPosition: `bottom ${y / 100}px right ${x / 100}px`,
		[theme.breakpoints.down("sm")]: {
			backgroundPosition: "center"
		}
	})
};