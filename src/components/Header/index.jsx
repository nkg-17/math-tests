import { Navbar, Nav, Container, Stack, Row, Col } from 'react-bootstrap';

import './index.css';


function Header(props) { // 
	return (
		<>
			<Container fluid className="HeaderMain">
				<h4 className="HeaderTitle">Стереометрия ЕГЭ</h4>
			</Container>
			<Container fluid className="HeaderSecondary">
				hello
			</Container>
		</>
	);
}

export default Header;