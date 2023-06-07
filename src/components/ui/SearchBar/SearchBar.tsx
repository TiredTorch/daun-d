import { FC, useCallback, useState } from "react";
import { Box, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import Button from "../Button/Button";
import { searchBarStyles } from "./SearchBar.styles";
import { SearchBarProps } from "./SearchBar.types";

export const SearchBar: FC<SearchBarProps> = ({
	handleSearch
}) => {
	const [searchString, setSearchString] = useState("");

	const handleLocalSearch = useCallback(
		() => handleSearch(searchString),
		[searchString],
	);
    

	return (
		<Box
			sx={searchBarStyles.root}
		>
			<TextField 
				sx={searchBarStyles.input}
				fullWidth
				value={searchString}
				onChange={(e) => setSearchString(e.target.value)}
			/>
			<Button
				onClick={handleLocalSearch}
				sx={searchBarStyles.button}
			>
				<SearchIcon/>
			</Button>
		</Box>
	);
};

export default SearchBar;