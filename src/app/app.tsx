import { ThemeProvider, CssBaseline } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "src/routes";
import { theme } from "src/theme/theme";

export const App = () => {
	return (
		<BrowserRouter>
			<ThemeProvider theme={theme}>
				<CssBaseline/>
				<AppRoutes/>
			</ThemeProvider>
		</BrowserRouter>
	);
};

export default App;