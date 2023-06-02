import { FC, PropsWithChildren, useState, useCallback } from "react";
import { Box } from "@mui/material";
import { Footer, Header, Sidebar } from "src/components";
import { userLayoutStyles } from "./UserLayout.styles";

export const UserLayout: FC<PropsWithChildren> = ({
	children
}) => {
	const [isOpenDrawer, setIsOpenDrawer] = useState(false);

	const handleToggleDrawer = useCallback(
		() => setIsOpenDrawer(prev => !prev),
		[setIsOpenDrawer],
	);
	

	return (
		<Box
			sx={userLayoutStyles.root}
		>
			<Header 
				handleOpenDrawer={handleToggleDrawer}
			/>
			<Sidebar
				open={isOpenDrawer}
				onClose={handleToggleDrawer}
			/>
			<Box
				sx={userLayoutStyles.contentWrapper}
			>
				<Box
					sx={userLayoutStyles.pageWrapper}
				>
					{children}
				</Box>
			</Box>
			<Footer/>
		</Box>
	);
};

export default UserLayout;