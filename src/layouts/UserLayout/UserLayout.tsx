import { FC, PropsWithChildren, useState, useCallback } from "react";
import { useLocation  } from "react-router-dom";
import { Box } from "@mui/material";
import { Footer, Header, ParallaxContainer, Sidebar } from "src/components";
import { useAuthControl } from "src/hooks";
import { userLayoutStyles } from "./UserLayout.styles";


export const UserLayout: FC<PropsWithChildren> = ({
	children
}) => {
	const route = useLocation();

	useAuthControl();

	const [isOpenDrawer, setIsOpenDrawer] = useState(false);

	const handleToggleDrawer = useCallback(
		() => setIsOpenDrawer(prev => !prev),
		[setIsOpenDrawer],
	);

	return (
		<Box
			sx={userLayoutStyles.root}
		>
			{!(route.pathname === "/") && <ParallaxContainer/>}
			<Header 
				handleOpenDrawer={handleToggleDrawer}
			/>
			<Sidebar
				open={isOpenDrawer}
				onClose={handleToggleDrawer}
			/>
			<Box
				sx={
					route.pathname === "/" ?
						userLayoutStyles.mapWrapper :
						userLayoutStyles.contentWrapper
				}
			>
				<Box
					sx={
						route.pathname === "/" ?
							userLayoutStyles.mapWrapper :
							userLayoutStyles.pageWrapper
					}
				>
					{children}
				</Box>
			</Box> 
			<Footer/>
		</Box>
	);
};

export default UserLayout;