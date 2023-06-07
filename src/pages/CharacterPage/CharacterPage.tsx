/* eslint-disable no-mixed-spaces-and-tabs */
import { Skeleton, Grid, Box, Typography, Divider } from "@mui/material";
import { query, where } from "firebase/firestore";
import { ref } from "firebase/storage";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { useDownloadURL } from "react-firebase-hooks/storage";
import { useParams } from "react-router-dom";
import { firebaseStorage, firestore } from "src/firebase";
import { useTypedSelector } from "src/redux";
import { characterPageStyles } from "./CharacterPage.styles";
import { getDescList } from "./CharacterPage.utils";

export const CharacterPage = () => {
	const userData = useTypedSelector(store => store.userSlice.userData);
	const route = useParams();

	const [
		characters, 
		isLoadingCharacters
	] = useCollectionData(query(
		firestore.characters, 
		where("uid", "==", route.characterName)
	));
	const [image, loading] = useDownloadURL(ref(firebaseStorage, `${characters?.[0]?.photoUrl}`));

	return (
		(isLoadingCharacters || !characters?.[0]) ? 
			<Skeleton/> :
			<Grid
				spacing={2}
				container
			>
				<Grid
					item 
					xs={12}
				>
					<Divider>
						<span
							style={characterPageStyles.divider}
						>
								Character Section
						</span>
					</Divider>
				</Grid>
				{image && !loading &&
				<Grid
					item 
					xs={6}
				>
					<Box
						sx={characterPageStyles.image}
						component="img"
						src={image}
						alt={`image_${characters[0].uid}`}
					/>	
				</Grid>}
				<Grid
					item 
					xs={image ? 6 : 12}
				>
					<Box
						sx={characterPageStyles.textWrapper}
					>
						{getDescList(characters[0]).filter(stat => !stat.private).map((stat, i) => (
							stat.value && (
								<Typography
									key={`pub_${i}`}
								>
									<span
										style={characterPageStyles.titlePublic}
									>
										{stat.title}
									</span>
									<span 
										style={characterPageStyles.contentPublic}
									>
										{`: ${stat.value}`}
									</span>
								</Typography>
							)
						))}
					</Box>
				</Grid>
				{characters[0].owner === userData?.uid &&
				<>
					<Grid
						item 
						xs={12}
					>
						<Divider>
							<span
								style={characterPageStyles.divider}
							>
								Creator Section
							</span>
						</Divider>
					</Grid>
					<Grid
						item 
						xs={6}
					>
						<Box
							sx={characterPageStyles.textWrapper}
						>
							<Divider>
								<span
									style={characterPageStyles.divider}
								>
								Common
								</span>
							</Divider>
							{getDescList(characters[0]).filter(stat => stat.private).map((stat, i) => (
								stat.value && (
									<Typography
										key={`priv_${i}`}
									>
										<span
											style={characterPageStyles.titlePublic}
										>
											{stat.title}
										</span>
										<span 
											style={characterPageStyles.contentPublic}
										>
											{`: ${stat.value}`}
										</span>
									</Typography>
								)
							))}
						</Box>
					</Grid>
					<Grid
						item 
						xs={6}
					>
						<Box
							sx={characterPageStyles.textWrapper}
						>
							<Divider>
								<span
									style={characterPageStyles.divider}
								>
									Params
								</span>
							</Divider>
							{
								characters[0].params.map((item, i) => (
									<Typography
										key={`param_item_${i}`}
									>
										<span
											style={characterPageStyles.titlePublic}
										>
											{item.name}
										</span>
										<span 
											style={characterPageStyles.contentPublic}
										>
											{`: ${item.value}`}
										</span>
									</Typography>
								))
							}
						</Box>
					</Grid>
					<Grid
						item 
						xs={6}
					>
						<Box>
							<Divider>
								<span
									style={characterPageStyles.divider}
								>
									Skills
								</span>
							</Divider>
							{
								characters[0].skills.map((item, i) => (
									<span 
										key={`sk_${i}`}
										style={characterPageStyles.titlePublic}
									>
										{`${item}, `}
									</span>
								))
							}
						</Box>
					</Grid>
					{characters[0].saveThrows.length > 0 &&
					 <Grid
					 	item 
					 	xs={6}
					 >
					 	<Box>
					 		<Divider>
					 			<span
					 				style={characterPageStyles.divider}
					 			>
									Save Throws
					 			</span>
					 		</Divider>
					 		{
					 			characters[0].saveThrows.map((item, i) => (
					 				<span 
					 					key={`ss_${i}`}
					 					style={characterPageStyles.titlePublic}
					 				>
					 					{`${item}, `}
					 				</span>
					 			))
					 		}
					 	</Box>
					 </Grid>}
					{characters[0].userNotes && 
					<Grid
						item 
						xs={12}
					>
						<Box>
							<Divider>
								<span
									style={characterPageStyles.divider}
								>
									User notes
								</span>
							</Divider>
							<span 
								style={characterPageStyles.titlePublic}
							>
								{characters[0].userNotes}
							</span>
						</Box>
					</Grid>
					}
				</>
				}
			</Grid>
	);
};

export default CharacterPage;