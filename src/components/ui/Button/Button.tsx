import { FC } from "react"; 
import { Button as MUIButton, ButtonProps } from "@mui/material";
import { buttonStyles } from "./Button.styles";

export const Button: FC<ButtonProps> = ({
	children,
	sx,
	...props
}) => {
	return (
		<MUIButton
			disableElevation
			disableFocusRipple
			disableRipple
			disableTouchRipple
			sx={{
				...buttonStyles.root,
				...sx
			}}
			{...props}
		>
			{children}
		</MUIButton>
	);
};

export default Button;