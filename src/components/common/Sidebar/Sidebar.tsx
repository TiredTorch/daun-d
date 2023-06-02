import { FC, Fragment, CSSProperties } from "react";
import { Drawer, List, ListItem, Divider } from "@mui/material";
import { SidebarProps } from "./Sidebar.types";
import { sidebarStyles } from "./Sidebar.styles";
import { headerLinks } from "../Header/Header.utils";
import { Link } from "react-router-dom";

export const Sidebar: FC<SidebarProps> = ({
	sx,
	...sidebarProps
}) => {
	return (
		<Drawer 
			{...sidebarProps}
			PaperProps={{
				sx: {
					...sx,
					...sidebarStyles.root
				}
			}}
			sx={sidebarStyles.draw}
		>
			<List
				sx={sidebarStyles.list}
			>
				{headerLinks.map((item, i) => (
					<Fragment key={i}>
						<ListItem >
							<Link 
								to={item.path}
								style={sidebarStyles.listItem as CSSProperties}
							>
								{item.title}
							</Link>
						</ListItem>
						{headerLinks.length - 1 !== i && <Divider/>}
					</Fragment>
				))}
			</List>
		</Drawer>
	);
};

export default Sidebar;