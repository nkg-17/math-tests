import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Catalog from 'pages/Catalog';

import RoutePaths from 'constants/routePaths';


function PageRouter(props) {
	return (
		<Router basename={process.env.PUBLIC_URL}>
				<Routes>
					<Route exact path={RoutePaths.Home} element={ <Catalog /> } />
					<Route path={RoutePaths.All} element={ <Navigate to={RoutePaths.Home} /> } />
 				</Routes>
		</Router>
	);
}

export default PageRouter;