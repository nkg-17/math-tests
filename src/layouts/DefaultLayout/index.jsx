import Header from 'components/Header';
import Footer from 'components/Footer';

import { Stack } from 'react-bootstrap';


function DefaultLayout(props) {
	return (
		<Stack>
			<Header />
			<main>
				{props.children}
			</main>
			<Footer />
		</Stack>
	);
}

export default DefaultLayout;
