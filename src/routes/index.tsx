import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { commonRoutes } from "./commonRoutes";
import { privateRoutes } from "./privateRoutes";
import { UserLayout } from "src/layouts";

export const AppRoutes = () => {
	const isAuth = true;

	return (
		<Suspense>
			<Routes>
				{[...privateRoutes, ...commonRoutes].map((route, index) => (
					<Route
						{...route}
						key={`r_${index}_${route.path}`}
						element={
							(!route.isAuth || isAuth) &&
								<UserLayout>
									{route.element}
								</UserLayout>	
						}
					/>
				))}
			</Routes>
		</Suspense>
	);
};
