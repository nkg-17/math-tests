import Header from 'components/Header';
import Footer from 'components/Footer';

import { Stack } from 'react-bootstrap';

import AppRouter from 'components/AppRouter';


function DefaultLayout(props) {
	return (
		<Stack className="min-vh-100 justify-content-between">
			<AppRouter>
				<Header />
				<main className="bg-light" style={{flex:"1"}}>
					{props.children}
				</main>
				<Footer />
			</AppRouter>
		</Stack>
	);
}

export default DefaultLayout;
