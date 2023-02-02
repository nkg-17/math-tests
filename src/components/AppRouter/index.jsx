import { BrowserRouter as Router } from 'react-router-dom';


function AppRouter(props) {
	return (
			<Router basename={import.meta.env.BASE_URL}>
				{props.children}
			</Router>
	);
}

export default AppRouter;