import { FC } from "react";
import { CharactersPageItemProps } from "./CharactersPageItem.types";
import { useDownloadURL } from "react-firebase-hooks/storage";
import { ref } from "firebase/storage";
import { firebaseStorage } from "src/firebase";
import { Box, Typography } from "@mui/material";
import { charactersPageItemStyles } from "./CharactersPageItem.styles";
import { Link } from "react-router-dom";

export const CharactersPageItem: FC<CharactersPageItemProps> = ({
	character
}) => {
	const [image] = useDownloadURL(ref(firebaseStorage, character.photoUrl));

	return (
		<Link 
			to={`/characters/${character.uid}`}
			style={{
				textDecoration: "none"
			}}
		>
			<Box
				sx={charactersPageItemStyles.root}
			>
				<Box
					sx={charactersPageItemStyles.image}
					component="img"
					src={image ?? "https://www.pngitem.com/pimgs/m/6-64950_who-am-i-png-transparent-who-am-i.png"}
					alt={`image_${character.uid}`}
				/>
				<Typography
					style={charactersPageItemStyles.text}
				>
					{character.name}
				</Typography>
			</Box>
		</Link>
	);
};

export default CharactersPageItem;