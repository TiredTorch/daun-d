import { useState, useEffect, useRef } from "react";
import { Camera, Vector3, MOUSE } from "three";
import { Box, Divider, Drawer, Typography } from "@mui/material";
import { mapPageStyles } from "./MapPage.styles";
import Map from "./Map/Map";
import { OrbitControls, CameraControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

export const MapPage = () => {
	

	return (
		<Box
			component="div"
			sx={mapPageStyles.root}
		>
			<Canvas>
				<ambientLight />
				<Map/>
				<CameraControls  
					minDistance={100}
					maxDistance={350}
					polarRotateSpeed={0}
					azimuthRotateSpeed={0}
					dollyToCursor={true}
					makeDefault
					distance={350}
					mouseButtons={{
						left: 2,
						middle: 8,
						right: 2,
						wheel: 8
					}}
					dollySpeed={40}
					touches={{
						one: 64,
						two: 1024,
						three: 0,
					}}
				/>
			</Canvas>
		</Box>
	);
};

export default MapPage;