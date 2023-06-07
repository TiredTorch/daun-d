import { Sprite } from "react-pixi-fiber";
import { Texture } from "pixi.js";
import marker from "../../../assets/marker.png";
import { FC } from "react";
import { useWindowSize } from "react-use";


export const Marker: FC<{
    x: number;
    y: number;
    isZoomed: boolean;
    onClickMarker: VoidFunction
}> = ({
	x,
	y,
	isZoomed,
	onClickMarker
}) => {

	const windowSize = useWindowSize();
	return (
		<Sprite
			texture={Texture.from(marker)}
			x={x}
			y={y}
			anchor={[0.5, 0.5]}
			width={((windowSize.height - 150)/windowSize.width) + (windowSize.width/(windowSize.height - 150)) * 20}
			height={((windowSize.height - 150)/windowSize.width) + (windowSize.width/(windowSize.height - 150)) * 20}
			eventMode="dynamic"
			onclick={onClickMarker}
			onpointertap={onClickMarker}
			cursor="pointer"
		/>
	);
};

export default Marker;