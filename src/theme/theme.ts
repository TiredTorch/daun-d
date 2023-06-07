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
			xs: 200,
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
			light: "#AAABBC", 
			main: "#C3C9E9",
			dark: "#45425A"
		},
		secondary: {
			light: "#8B8982",
			main: "#6C91C2",
			dark: "#575C55"
		}
	},
	typography: {
		fontFamily: "Cinzel"
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
				color: theme.palette.primary.dark,
				fontSize: "calc(1vmin + 12px)",
				background: theme.palette.primary.light,
				border: `2px solid ${theme.palette.primary.dark}`,
				height: "fit-content",
				"&:hover": {
					color: theme.palette.primary.dark,
					background: theme.palette.primary.main,
					border: `2px solid ${theme.palette.primary.dark}`,
				}
			}
		}
	},
	MuiCircularProgress: {
		styleOverrides: {
			root: {
				color: theme.palette.primary.light
			}
		}
	},
	MuiInputBase: {
		styleOverrides: {
			root: {
				color:  theme.palette.primary.light,
				fontWeight: "700",
				fontSize: "calc(1vmin + 14px)",
				fontFamily: "Cinzel",
				"fieldset": {
					border: "1px solid black"
				},
				"&.Mui-focused": {
					"fieldset": {
						border: "1px solid black",
						borderColor: "black !important"
					}
				}
			}
		}
	},
	MuiInput: {
		styleOverrides: {
			root: {
			}
		}
	},
	MuiOutlinedInput: {
		styleOverrides: {
			root: {
				border: "none"
			},
		}
	},
	MuiTableCell: {
		styleOverrides: {
			root: {
				color:  theme.palette.primary.light,
				fontWeight: "700",
				fontSize: "calc(1vmin + 14px)",
				fontFamily: "Cinzel",
				borderColor: "rgba(0, 0, 0, 0.42)",
				borderRight: "1px solid rgba(0, 0, 0, 0.42)",
				":last-child": {
					borderRight: "none",

				}
			}
		}
	},
	MuiSelect: {
		styleOverrides: {
			root: {
				width: "100%"
			}
		}
	},
	MuiInputLabel: {
		styleOverrides: {
			root: {
				color:  theme.palette.primary.light,
				fontWeight: "700",
				fontSize: "calc(.5vmin + 9px)",
				fontFamily: "Cinzel",
			}
		}
	}
};