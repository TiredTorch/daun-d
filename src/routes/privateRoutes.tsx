import { lazy } from "react";
import { RouteProps } from "react-router-dom";
import { AppRoutes } from "src/types";

const ProfilePage = lazy(() => import("../pages/ProfilePage/ProfilePage"));


export const privateRoutes: Array<RouteProps & { isAuth: boolean }> = [
	{
		element: <ProfilePage />,
		path: AppRoutes.PROFILE,
		isAuth: true
	},
	
];
