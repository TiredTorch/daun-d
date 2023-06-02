import { createTheme } from "@mui/material";

declare module "@mui/material/styles" {
	interface BreakpointOverrides {
		xs: true;
		xxs: true;
		mb: true;
		sm: true;
		md: true;
		lg: true;
		xl: true;
	}
}

export const theme = createTheme({
	breakpoints: {
		values: {
			xs: 0,
			xxs: 360,
			mb: 375,
			sm: 700,
			md: 991,
			lg: 1024,
			xl: 1440
		}
	},
	palette: {
		primary: {
			light: "#004d00",
			main: "#c7b52b",
			dark: "#6A01FD"
		},
		secondary: {
			light: "#005dff",
			main: "#7c4d27",
			dark: "#8da7b0"
		}
	},
	typography: {
		fontFamily: "Playfair_Display"
	}
});

theme.components = {
	MuiTypography: {
		styleOverrides: {
			root: {
				color: theme.palette.common.black
			}
		}
	},
	MuiButton: {
		styleOverrides: {
			root: {
				color: theme.palette.primary.light,
				fontSize: "calc(1vmin + 12px)",
				background: theme.palette.primary.main,
				border: `2px solid ${theme.palette.primary.light}`,
				height: "fit-content",
				"&:hover": {
					color: theme.palette.primary.dark,
					background: theme.palette.secondary.dark,
					border: `2px solid ${theme.palette.primary.dark}`,
				}
			}
		}
	}
};