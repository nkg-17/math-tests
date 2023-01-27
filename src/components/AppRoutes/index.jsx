import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import RoutePaths from 'constants/routePaths';

import CatalogPage from 'pages/CatalogPage';
import TestPage from 'pages/TestPage';
import HelpPage from 'pages/HelpPage';


function AppRoutes(props) {
	return (
			<Routes>
				<Route path={RoutePaths.All} element={ <Navigate to={RoutePaths.Home} /> } />
				<Route path={RoutePaths.Home} element={ <Navigate to={import.meta.env.VITE_DEFAULT_REDIRECT} /> } />

				<Route path={RoutePaths.Catalog} element={ <CatalogPage /> } />
				<Route path={RoutePaths.Test} element={ <TestPage /> } />
				<Route path={RoutePaths.Help} element={ <HelpPage /> } />
			</Routes>
	);
}

export default AppRoutes;