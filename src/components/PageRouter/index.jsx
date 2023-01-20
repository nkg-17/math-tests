import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Catalog from 'pages/Catalog';

import RoutePaths from 'constants/routePaths';


function PageRouter(props) {
	return (
		<Router basename={import.meta.env.BASE_URL}>
				<Routes>
					<Route path={RoutePaths.Home} element={ <Catalog /> } />
					<Route path={RoutePaths.All} element={ <Navigate to={RoutePaths.Home} /> } />
 				</Routes>
		</Router>
	);
}

export default PageRouter;