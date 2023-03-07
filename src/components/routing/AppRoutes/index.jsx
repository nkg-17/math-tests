import { 
    BrowserRouter as Router, 
    Routes, 
    Route, 
    Navigate,
    useLocation
} from 'react-router-dom'

import { AnimatePresence, useScroll } from 'framer-motion'

import { RoutePaths } from 'utils/constants'

import CatalogPage from 'pages/Catalog'
import TestPage from 'pages/Test'
import HelpPage from 'pages/Help'


function AppRoutes(props) {
    const location = useLocation()
    
    return (
        <AnimatePresence mode="wait">
            <Routes key={location.pathname} location={location}>
                <Route path={RoutePaths.All} element={ <Navigate to={RoutePaths.Home} /> } />
                <Route path={RoutePaths.Home} element={ <Navigate to={RoutePaths.Catalog} /> } />

                <Route path={RoutePaths.Catalog} element={ <CatalogPage /> } />
                <Route path={RoutePaths.Test} element={ <TestPage /> } />
                <Route path={RoutePaths.Help} element={ <HelpPage /> } />
            </Routes>
        </AnimatePresence>
    )
}

export default AppRoutes
