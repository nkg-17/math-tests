import { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';

import NavTitle from './NavTitle';
import { Button, LinkButton } from 'components/buttons';

import { RoutePaths } from 'utils/constants';


const navVariants = {
	"transparent-light": {
		buttonVariant: "transparent",
		bg: "bg-transparent",
		shadow: "shadow-none"
	},
	"transparent-dark": {
		buttonVariant: "light",
		bg: "bg-transparent",
		shadow: "shadow-none"
	},
	"opaque": {
		buttonVariant: "light",
		bg: "bg-white",
		shadow: "shadow-lg"
	}
}

function Nav({children, className, style, variant, showTitle}) {
	variant = (navVariants[variant]) ? navVariants[variant] : navVariants["transparent-light"]

	return (
		<nav 
		className={`
		w-full h-14 sticky top-0 
		px-24 
		transition 
		ease-in-out 
		${variant.bg} 
		shadow-black/10 ${variant.shadow} 
		flex justify-between items-center ${className}`}
		style={style}>
			<NavTitle show={showTitle} />
			<div className="flex items-center flex-row gap-2 font-light">
				<LinkButton to={RoutePaths.Catalog} variant={variant.buttonVariant}>
					Каталог
				</LinkButton>
				<LinkButton to={RoutePaths.Help} variant={variant.buttonVariant}>
					Справка
				</LinkButton>
				{/*<Button to={RoutePaths.Catalog} variant={variant.buttonVariant}>
					<i className="bi bi-list" />
				</Button>*/}
			</div>
		</nav>
	);
}

export default Nav;