import Header from 'components/Header';
import Footer from 'components/Footer';

import { Stack } from 'react-bootstrap';

import AppRouter from 'components/AppRouter';


function MinimalLayout(props) {
	return (
		<Stack className="min-vh-100 justify-content-between">
			<Header minimized showReturn />
			<main className="bg-light px-5 py-3" style={{flex:"1"}}>
				{props.children}
			</main>
		</Stack>
	);
}

export default MinimalLayout;
