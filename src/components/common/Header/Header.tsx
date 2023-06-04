import { FC, CSSProperties, Fragment } from "react";
import { Link } from "react-router-dom";
import { AppBar, Box, List, ListItem, Divider, Avatar } from "@mui/material";
import { useSignInWithGoogle, useSignOut } from "react-firebase-hooks/auth";
import { Button, LoadingCircle } from "src/components/ui";
import { firebaseAuth } from "src/firebase";
import { useTypedSelector } from "src/redux";
import { HeaderProps } from "./Header.types";
import { headerStyles } from "./Header.styles";
import { headerLinks } from "./Header.utils";
import logo from "../../../assets/logo.png";

export const Header: FC<HeaderProps> = ({
	handleOpenDrawer
}) => {
	const { userData, isLoading } = useTypedSelector(store => store.userSlice);

	const [signInWithGoogle, ,loadingSignIn] = useSignInWithGoogle(firebaseAuth);
	const [signOut, loadingSignOut] = useSignOut(firebaseAuth);

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
						{ headerLinks.length - 1 !== i && 
						<Divider 
							orientation="vertical"
							sx={headerStyles.divider}
						/> 
						}
					</Fragment>
				))}
			</List>
			{!(isLoading || loadingSignOut || loadingSignIn) && (
				userData ?
					<Box
						sx={headerStyles.avatarWrapper}
					>
						<Link to={`/profile/${userData.uid}`}>
							<Avatar 
								src={userData.photoURL}
								sx={headerStyles.avatar}
							/>
						</Link> 
						<Button
							onClick={signOut}
							sx={headerStyles.buttonLogOut}
						>
							Log out
						</Button>
					</Box>
					:
					<Button onClick={() => signInWithGoogle()}>Sign up</Button>
			)}
			{(isLoading || loadingSignOut || loadingSignIn) && <LoadingCircle/>}
		</AppBar>
	);
};

export default Header;