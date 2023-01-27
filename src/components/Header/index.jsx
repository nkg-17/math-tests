import { useState, useEffect, useContext } from 'react';
import { Navbar, Nav, Container, Stack, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import RoutePaths from 'constants/routePaths';

import './index.css';
import brandImage from './brand.svg';

import AppContext from 'contexts/AppContext';


function Header(props) {
	return (
		<>
			<Container fluid className={"Header " + (props.showReturn ? "HeaderShadow" : "")}>
				{(props.showReturn) ? (
					<Link 
					to={RoutePaths.Catalog} 
					className="HeaderReturnLink text-reset text-decoration-none"
					style={{flex:"1"}}>
						<h5 className="HeaderReturn m-0 p-0">Вернуться</h5>
					</Link>
				) : (<></>)}

				<Link to={RoutePaths.Catalog} className="HeaderLink text-reset text-decoration-none">
					<img className="HeaderBrand" src={brandImage} alt="Brand" />
					<h4 className="HeaderTitle">Стереометрия ЕГЭ</h4>
				</Link>

				{(props.showReturn) ? (
					<div style={{flex:"1"}}></div>
				) : (<></>)}

			</Container>

			{
				(!props.minimized) ? (
					<Container fluid className="HeaderNav HeaderShadow justify-content-center">
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