
import AppRouter from 'components/AppRouter';
import AppRoutes from 'components/AppRoutes';
import DefaultLayout from 'layouts/DefaultLayout';

import AppContext from 'contexts/AppContext';


function App() {
	return (
		<AppRouter>
			<AppRoutes />
		</AppRouter>
	);
}

export default App;
