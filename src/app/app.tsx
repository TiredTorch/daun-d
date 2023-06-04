import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { AppRoutes } from "src/routes";
import { theme } from "src/theme/theme";
import { store } from "../redux";

export const App = () => {
	return (
		<Provider store={store}>
			<BrowserRouter>
				<ThemeProvider theme={theme}>
					<CssBaseline/>
					<AppRoutes/>
				</ThemeProvider>
			</BrowserRouter>
		</Provider>
	);
};

export default App;