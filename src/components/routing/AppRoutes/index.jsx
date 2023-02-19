import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import { RoutePaths } from 'utils/constants';

import CatalogPage from 'pages/Catalog';
import TestPage from 'pages/Test';
import HelpPage from 'pages/Help';


function AppRoutes(props) {
    return (
            <Routes>
                <Route path={RoutePaths.All} element={ <Navigate to={RoutePaths.Home} /> } />
                <Route path={RoutePaths.Home} element={ <Navigate to={RoutePaths.Catalog} /> } />

                <Route path={RoutePaths.Catalog} element={ <CatalogPage /> } />
                <Route path={RoutePaths.Test} element={ <TestPage /> } />
                <Route path={RoutePaths.Help} element={ <HelpPage /> } />
            </Routes>
    );
}

export default AppRoutes;
