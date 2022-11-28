import './App.css';

import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import RoutePaths from './constants/routePaths';

import HomePage from './pages/HomePage';
import DebugPage from './pages/DebugPage';


function App() {
	return (
		<div className="App">
			<Router basename={process.env.PUBLIC_URL}>
					<Routes>
						<Route exact path={RoutePaths.Home} element={ <HomePage /> } />
						<Route exact path={RoutePaths.Debug} element={ <DebugPage /> } />
						<Route path={RoutePaths.ALL} element={ <Navigate to={RoutePaths.Home} /> } />
	 				</Routes>
			</Router>
		</div>
	);
}

export default App;
