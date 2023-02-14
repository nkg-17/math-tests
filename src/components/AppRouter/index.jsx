import { useEffect } from 'react';
import { BrowserRouter as Router, useLocation } from 'react-router-dom';


function ScrollToTop() {
	const { pathname } = useLocation()

	useEffect(() => {
		window.scrollTo(0, 0)
	}, [pathname])

	return null
}

function AppRouter(props) {
	return (
			<Router basename={import.meta.env.BASE_URL}>
				<ScrollToTop />
				{props.children}
			</Router>
	);
}

export default AppRouter;