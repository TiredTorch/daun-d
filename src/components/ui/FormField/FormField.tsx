/* eslint-disable no-mixed-spaces-and-tabs */
import { FC, useState, useCallback } from "react";
import { Box, Checkbox, Divider, InputLabel, MenuItem, Select, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, TextFieldProps, TextareaAutosize } from "@mui/material";
import { formFieldStyles } from "./FormField.styles";

export const FormField: FC<TextFieldProps & {
    data?: {
		name: string;
        value: number;
	}[];
	options?: string[];
    setFieldValue?: (value: any) => void
}> = ({
	type,
	data,
	options,
	setFieldValue,
	...props
}) => {
	const [, setTableData] = useState<Array<{value: string}>>(props.value as any);

	const handleChangeTableData = useCallback(
		(index: number, value: string) => {
			setTableData((prev) => {
				const newData = prev;
				newData[index].value = value;

				if (setFieldValue) setFieldValue(newData);
				return newData; 
			});
		},
		[setTableData, setFieldValue],
	);
    

	return (
		<>
			{
				(type === "text" || type === "number") &&
                <TextField
                	variant="standard" 
                	type={type}
                	{...props}
                />
			}
			{
                
				(type === "checkbox") &&
                <Box
                	sx={formFieldStyles.checkboxWrapper}
                >
                	<span
                		style={formFieldStyles.checkboxText}
                	>{props.placeholder}</span>
                	<Checkbox
                		disableFocusRipple
                		disableRipple
                		disableTouchRipple
                		name={props.name}
                		id={props.id}
                		value={props.value}
                		onChange={props.onChange}
                	/>
                </Box>
			}
			{
				(type === "table") && data &&
                <TableContainer component={Box}>
                	<Table>
                		<TableHead>
                			<TableRow>
                				<TableCell align="center" colSpan={2}>
                                    Stats
                				</TableCell>
                			</TableRow>
                			<TableRow>
                				<TableCell>
                                    Stat
                				</TableCell>
                					<TableCell align="center">
                                    Value
                				</TableCell>
                			</TableRow>
                		</TableHead>
                		<TableBody>
                			{data.map((item, i) => (
                				<TableRow key={i}>
                					<TableCell>
                						{item.name}
                					</TableCell>
                					<TableCell align="right">
                						<FormField
                							value={item.value}
                							onChange={(e) => handleChangeTableData(i, e.target.value)}
                							inputProps={{
                								sx: {
                									textAlign: "center"
                								}
                							}}
                							type="number"
                						/>
                					</TableCell>
                				</TableRow>
                			))}
                		</TableBody>
                	</Table>
                </TableContainer>
			}
			{
				(type === "options") && options && setFieldValue &&
                <Box>
                	<InputLabel id={props.id}>{props.placeholder}</InputLabel>
                	<Select
                		variant="standard"
                		multiple
                		name={props.name}
                		id={props.id}
                		onChange={e => setFieldValue(e.target.value)}
                		value={props.value}
                		displayEmpty
                	>
                		{options.map((option, i) => (
                			<MenuItem
                				value={option}
                				key={i}
                			>
                				{option}
                			</MenuItem>
                		))}
                	</Select>
                </Box>
			}
			{
				(type === "textarea") && setFieldValue &&
                <TextareaAutosize
                	placeholder={props.placeholder}
                	onChange={e => setFieldValue(e.target.value)}
                	value={props.value as string}
                />
			}
			{
				(type === "breaker") && 
                <Box>
                	<Divider
                		sx={{
                			margin: "30px 0"
                		}}
                	>{props.placeholder}</Divider>
                </Box>
			}
			{
				(type === "image") && setFieldValue &&
                <Box
                	sx={{
                		display: "flex",
                		flexDirection: "column",
                		alignItems: "center"
                	}}
                >
                	{props.value ?
                		<Box
                			className="imagePreview"
                			component="img"
                			src={URL.createObjectURL((props as any).value)}
                		/> :
                		<>
                			<input
                				style={formFieldStyles.fileInput}
                				accept="image/*"
                				id={props.id}
                				type="file"
                				onChange={e => setFieldValue(e.target?.files?.[0])}
                			/>
                			<label 
                				htmlFor={props.id} 
                				className="file-label"
                			>
                				{props.placeholder}
                			</label>
                		</>
                	}
                </Box>
			}
		</>
	);
};

export default FormField;