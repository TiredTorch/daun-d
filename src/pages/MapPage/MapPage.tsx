import { useState, useCallback, useRef } from "react";
import { Texture } from "pixi.js";
import { Box, Divider, Drawer, Typography } from "@mui/material";
import { useWindowSize, useKeyPressEvent } from "react-use";
import { mapPageStyles } from "./MapPage.styles";
import map from "../../assets/map-bg.png";
import Marker from "./Marker/Marker";
import { markers } from "./MapPage.utils";
import { Stage, Sprite, Container } from "react-pixi-fiber";
import { Button } from "src/components";
import LogoutIcon from "@mui/icons-material/Logout";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

export const MapPage = () => {
	const rootRef = useRef(null);
	const windowSize = useWindowSize();
	const [isAvalivableActions, setIsAvalivableActions] = useState(true);
	const [isDrawerOpen, setIsDrawerOpen] = useState(false);
	const [drawerData, setDrawerData] = useState<any>(null);
	const [scaleFactor, setScaleFactor] = useState(1);
	const [selectedRegion, setSelectedRegion] = useState<string | null>(null);
	const [positionFactor, setPositionFactor] = useState({
		x: 0,
		y: 0
	});

	const delay = (time: number) => {
		return new Promise((res) => {
			setTimeout(res, time);
		});
	};

	useKeyPressEvent("Escape", async(e) => {
		e.preventDefault();
		handleGoToGlobalMap();
	});

	useKeyPressEvent("Tab", async(e) => {
		e.preventDefault();
		handleToggleTab();
	});

	const handleInterpolatePosition = useCallback(
		async (start: [number, number], pos: [number, number], step: number) => {
			for (let index = 0; index < 1; index+=step) {
				setPositionFactor(prev => {
					if (pos[0] > start[0] && prev.x >= pos[0]) {
						return prev;
					}
					if (pos[0] < start[0] && prev.x <= pos[0]) {
						return prev;
					}

					return ({
						x: prev.x + ((pos[0] - start[0]) * step),
						y: prev.y + ((pos[1] - start[1]) * step)
					});
				});
				await delay(15);
			}
			setPositionFactor({
				x: pos[0],
				y: pos[1]
			});
		},
		[delay, setPositionFactor],
	);

	const handleInterpolateScale = useCallback(
		async (start:number, scale: number, step: number) => {
			for (let index = 0; index < 1; index+=step) {
				setScaleFactor(prev => {
					if (scale > start && prev >= scale) {
						return prev;
					}
					if (scale < start && prev <= scale) {
						return prev;
					}
					return (prev + ((scale - start) * step));}
				);
				await delay(15);
			}
			setScaleFactor(scale);
		},
		[setScaleFactor],
	);

	const handleGoToGlobalMap = useCallback(
		async () => {
			handleInterpolatePosition([positionFactor.x, positionFactor.y], [0, 0], .1);
			await handleInterpolateScale(scaleFactor, 1, .1);
			setIsAvalivableActions(true);
			setSelectedRegion(null);
			setDrawerData(null);
			setIsDrawerOpen(false);
		},
		[
			positionFactor, 
			positionFactor, 
			handleInterpolatePosition,
			handleInterpolateScale,
			setIsAvalivableActions,
			setSelectedRegion,
			setDrawerData,
			setIsDrawerOpen
		],
	);

	const handleToggleTab = useCallback(
		() => {
			if (!drawerData) return;
			setIsDrawerOpen(prev => !prev);
		},
		[drawerData, setIsDrawerOpen],
	);

	

	const handleClickMarker = useCallback(
		async (pos: [number, number], zoom: number, regeonId: string) => {
			
			setIsDrawerOpen(true);
			if (!isAvalivableActions) {
				return;
			}
			setSelectedRegion(regeonId);
			handleInterpolatePosition([positionFactor.x, positionFactor.y], pos, .1);
			await handleInterpolateScale(scaleFactor, zoom, .1);
			setIsAvalivableActions(false);
			setDrawerData({regionId: regeonId});
		},
		[
			isAvalivableActions, 
			positionFactor, 
			scaleFactor, 
			selectedRegion,
			handleInterpolatePosition,
			handleInterpolateScale,
			setIsAvalivableActions
		]
	);

	return (
		<Box
			ref={rootRef}
			sx={mapPageStyles.root}
		>
			<Drawer
				sx={{
					position: "relative"
				}}
				variant="temporary"
				open={(!!drawerData && isDrawerOpen)}
				onClose={() => setIsDrawerOpen(false)}
				anchor="right"
				hideBackdrop={true}
				PaperProps={{
					sx: mapPageStyles.drawer
				}}
			>
				<Box
					sx={mapPageStyles.buttonWrapper}
				>
					<Button
						onClick={handleToggleTab}
						sx={mapPageStyles.button}
					>
						<LogoutIcon/>
					</Button>
					<Button
						sx={mapPageStyles.button}
						onClick={handleGoToGlobalMap}
					>
						<HighlightOffIcon/>
					</Button>
				</Box>
				<Divider
					sx={mapPageStyles.title}
				>
					Name
				</Divider>
				<Typography
					sx={mapPageStyles.about}
				>
					About:
				</Typography>
				<Typography
					sx={mapPageStyles.text}
				>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi possimus magni repellat veniam dolores maxime commodi eius nisi. Facilis, minima?
				</Typography>
			</Drawer>
			<Stage
				options={{
					width:windowSize.width,
					height:windowSize.height - 150,
					backgroundAlpha: 0,
					antialias: true,
					powerPreference: "low-power",
					premultipliedAlpha: false,
				}}
			>
				<Container
					width={windowSize.width}
					height={windowSize.height - 150}
					x={positionFactor.x}
					y={positionFactor.y}
					scale={scaleFactor}
				>

					<Sprite
						texture={Texture.from(map)}
						width={windowSize.width}
						height={windowSize.height - 150}
						eventMode="dynamic"
					/> 
					{markers(
						windowSize.width, 
						(windowSize.height - 150)
					).map((mark, i = 1) => (
						(!selectedRegion || selectedRegion === `${i}`) && 
						<Marker
							key={i}
							x={mark.x}
							y={mark.y}
							isZoomed={!isAvalivableActions}
							onClickMarker={() => handleClickMarker(
							mark.selectPos as [number, number], 
							mark.zoom,
							`${i}`
							)}
						/>
					))}
				</Container>
			</Stage>
		</Box>
	);
};

export default MapPage;