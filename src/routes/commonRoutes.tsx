import { lazy } from "react";
import { RouteProps } from "react-router-dom";
import { AppRoutes } from "src/types";

const MapPage = lazy(() => import("../pages/MapPage/MapPage"));
const ToolPage = lazy(() => import("../pages/ToolPage/ToolPage"));
const ToolsPage = lazy(() => import("../pages/ToolsPage/ToolsPage"));
const CharacterPage = lazy(() => import("../pages/CharacterPage/CharacterPage"));
const CharactersPage = lazy(() => import("../pages/CharactersPage/CharactersPage"));
const NotFoundPage = lazy(() => import("../pages/NotFoundPage/NotFoundPage"));

export const commonRoutes: Array<RouteProps & { isAuth: boolean }> = [
	{
		element: <MapPage />,
		path: AppRoutes.MAP,
		isAuth: false,
	},
	{
		element: <ToolPage />,
		path: AppRoutes.TOOL,
		isAuth: false,
	},
	{
		element: <ToolsPage />,
		path: AppRoutes.TOOLS,
		isAuth: false,
	},
	{
		element: <CharacterPage />,
		path: AppRoutes.CHARACTER,
		isAuth: false,
	},
	{
		element: <CharactersPage />,
		path: AppRoutes.CHARACTERS,
		isAuth: false,
	},
	{
		element: <NotFoundPage />,
		path: "*",
		isAuth: false,
	}
];
