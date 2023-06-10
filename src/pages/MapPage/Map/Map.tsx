import { useRef, useState, useCallback, useEffect } from "react";
import { Group, Vector3 } from "three";
import { useFrame, useThree } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";
import map from "../../../assets/map-bg.png";
import { mapConfig } from "./Map.config";

export const Map = () => {
	const mapRef = useRef<Group>(null);
	const mapTexture = useTexture(map);
	const { camera } = useThree();


	const [windowSize, setWindowSize] = useState({
		width: window.innerWidth,
		height: window.innerHeight,
	});

	const handleResize = useCallback(
		() => {
			setWindowSize({
				width: window.innerWidth,
				height: window.innerHeight,
			});
		},
		[window, setWindowSize],
	);
    
	useFrame(({
		camera: cm,
	}) => {
		if (!mapRef.current) return;
		const { width, height } = windowSize;
		const scale = Math.min(width / mapConfig.mapWidth, height / mapConfig.mapHeight);
		mapRef.current.scale.set(scale, scale, 1);
		
	});

	useEffect(() => {
		camera.position.set(0, 0, 350);
		window.addEventListener("resize", handleResize);
	}, []);
    

	return (
		<group ref={mapRef}>
			<mesh>
				<planeBufferGeometry args={[mapConfig.mapWidth, mapConfig.mapHeight]}/>
				<meshBasicMaterial 
					attach="material" 
					map={mapTexture} 
				/>
			</mesh>
		</group>
	);
};

export default Map;