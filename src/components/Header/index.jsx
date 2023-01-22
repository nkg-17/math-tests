import { Navbar, Nav, Container, Stack, Row, Col } from 'react-bootstrap';

import './index.css';


function Header(props) {
	return (
		<>
			<Container fluid className="Header">
				<div className="HeaderLink">
					<img className="HeaderBrand" src="/brand.svg" alt="Brand" />
					<h4 className="HeaderTitle">Стереометрия ЕГЭ</h4>
				</div>
			</Container>

			{
				(!props.minimized) ? (
					<Container fluid className="HeaderNav">
						<div className="HeaderNavItem">Каталог</div>
						<div className="HeaderNavItem">Справка</div>
					</Container>
				) : (
					<></>
				)
			}
		</>
	);
}

export default Header;