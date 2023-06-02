import { FC, CSSProperties, Fragment } from "react";
import { Link } from "react-router-dom";
import { AppBar, Box, List, ListItem, Divider } from "@mui/material";
import { Button } from "src/components/ui";
import { HeaderProps } from "./Header.types";
import { headerStyles } from "./Header.styles";
import { headerLinks } from "./Header.utils";
import logo from "../../../assets/logo.png";

export const Header: FC<HeaderProps> = ({
	handleOpenDrawer
}) => {

	return (
		<AppBar
			sx={headerStyles.root}
		>
			<Box
				sx={headerStyles.logo}
				component="img"
				src={logo}
				onClick={handleOpenDrawer}
			/>
			<List
				sx={headerStyles.list}
			>
				{headerLinks.map((item, i) => (
					<Fragment key={i}>
						<ListItem >
							<Link 
								to={item.path}
								style={headerStyles.listItem as CSSProperties}
							>
								{item.title}
							</Link>
						</ListItem>
						{headerLinks.length - 1 !== i &&
             <Divider orientation="vertical"/>
						}
					</Fragment>
				))}
			</List>
			<Button>
        Sign up
			</Button>
		</AppBar>
	);
};

export default Header;