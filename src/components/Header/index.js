import './Header.css';

import { Container, Button } from 'react-bootstrap';


function Header(props) {
	return (
		<Container fluid className="Header">
			<div className="Header-Title">Стереометрия ЕГЭ</div>
			<Button variant="light"><i className="bi bi-gear" /></Button>
		</Container>
	);
}

export default Header;