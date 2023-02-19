import { AppRouter, AppRoutes } from 'components/routing';
import { ScrollToTop } from 'components/utils';


function App() {
	return (
		<AppRouter>
			<ScrollToTop />
			<AppRoutes />
		</AppRouter>
	);
}

export default App;
