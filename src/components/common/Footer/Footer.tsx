import { Box } from "@mui/material";
import dayjs from "dayjs";
import { footerStyles } from "./Footer.styles";

export const Footer = () => {
	const currentYear = dayjs().format("YYYY");

	return (
		<Box
			sx={footerStyles.root}
		>
			{`© ${currentYear} Copyright: DaunD`}
		</Box>
	);
};

export default Footer;