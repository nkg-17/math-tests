import { Navbar, Nav, Container, Stack, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import RoutePaths from 'constants/routePaths';

import './index.css';
import brandImage from './brand.svg';


function Header(props) {
	return (
		<>
			<Container fluid className="Header">
				<Link to={RoutePaths.Home} className="HeaderLink text-reset text-decoration-none">
					<img className="HeaderBrand" src={brandImage} alt="Brand" />
					<h4 className="HeaderTitle">Стереометрия ЕГЭ</h4>
				</Link>
			</Container>

			{
				(!props.minimized) ? (
					<Container fluid className="HeaderNav justify-content-center">
						<Link 
						to={RoutePaths.Catalog} 
						className="HeaderNavItem text-decoration-none">
							Каталог
						</Link>
						<Link 
						to={RoutePaths.Help} 
						className="HeaderNavItem text-decoration-none">
							Справка
						</Link>
					</Container>
				) : (
					<></>
				)
			}
		</>
	);
}

export default Header;