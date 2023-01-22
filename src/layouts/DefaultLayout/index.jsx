import Header from 'components/Header';
import Footer from 'components/Footer';

import { Stack } from 'react-bootstrap';


function DefaultLayout(props) {
	return (
		<Stack className="min-vh-100 justify-content-between">
			<main style={{flex:"1"}}>
				{props.children}
			</main>
			<Footer />
		</Stack>
	);
}

export default DefaultLayout;
