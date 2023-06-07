import { useCallback, useState } from "react";
import { Box, Grid, Skeleton } from "@mui/material";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { orderBy, query, where } from "firebase/firestore";
import { AddCharacterForm, Button, SearchBar } from "src/components";
import { useTypedSelector } from "src/redux";
import { charactersPageStyles } from "./CharactersPage.styles";
import { firestore } from "src/firebase";
import CharactersPageItem from "./CharactersPageItem/CharactersPageItem";

export const CharactersPage = () => {
	const userData = useTypedSelector(store => store.userSlice.userData);

	const [isAddModalOpen, setIsAddModalOpen] = useState(false);
	const [searchQuery, setSearchQuery] = useState(
		query(
			firestore.characters, 
			where("name", ">=", ""), 
			where("name", "<=", "" + "\uf8ff"),
			orderBy("name")
		)
	);

	const [
		characters, 
		isLoadingCharacters
	] = useCollectionData(searchQuery);

	const handleSearch = useCallback(
		(searchString: string) => {
			setSearchQuery(
				query(
					firestore.characters, 
					where("name", ">=", searchString), 
					where("name", "<=", searchString + "\uf8ff"),
					orderBy("name")
				)
			);
		},
		[setSearchQuery],
	);
	
	console.log("characters", characters);

	return (
		<Box
			sx={charactersPageStyles.root}
		>
			<AddCharacterForm 
				open={isAddModalOpen} 
				onClose={() => setIsAddModalOpen(false)}			
			/>
			<SearchBar handleSearch={handleSearch}/>
			{userData && (
				<Button
					onClick={() => setIsAddModalOpen(true)}
				>
					Add Character
				</Button>
			)}
			<Grid
				spacing={2}
				container
			>
				{isLoadingCharacters && (
					new Array(8).fill(0).map((item, i) => (
						<Grid
							item 
							xs={12}
							xxs={6}
							sm={4}
							md={3}
							key={i}
						>
							<Skeleton
								variant="rectangular"
								sx={charactersPageStyles.skeleton}
							/>
						</Grid>
					))
				)}
				
				{!isLoadingCharacters && 
				characters?.map(character => (
					<Grid
						item 
						xs={12}
						xxs={6}
						sm={4}
						md={3}
						key={character.uid}
					>
						<CharactersPageItem
							character={character}
						/>
					</Grid>
					
				))
				}
			</Grid>
		</Box>
	);
};

export default CharactersPage;