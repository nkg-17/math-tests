import './Header.css';

import { Container } from 'react-bootstrap';
import Button from 'components/Buttons/Button';

function Header(props) {
	return (
		<Container fluid className="sticky-top bg-white p-2 d-flex flex-row justify-content-between">
			<div className="Header-Title">Стереометрия ЕГЭ</div>
			<Button variant="light"><i className="bi bi-gear" /></Button>
		</Container>
	);
}

export default Header;