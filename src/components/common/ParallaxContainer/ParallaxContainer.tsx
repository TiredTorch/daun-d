import { Box } from "@mui/material";
import { useMousePosition } from "src/hooks";
import { parallaxContainerStyles } from "./ParallaxContainer.styles";

export const ParallaxContainer = () => {
	const { x, y } = useMousePosition();

	return (
		<Box
			sx={parallaxContainerStyles.root(x, y)}
		/>
	);
};

export default ParallaxContainer;