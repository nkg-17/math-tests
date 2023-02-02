import { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';

import RoutePaths from 'constants/routePaths';

import AppContext from 'contexts/AppContext';


function NavItem(props) {
	return (
		<span 
		className="
		px-3 py-2 
		cursor-pointer select-none 
		rounded-lg 
		transition 
		ease-in-out 
		text-white
		hover:text-black
		hover:bg-slate-200 active:bg-slate-300">
			{props.children}
		</span>
	)
}


function Nav(props) {
	return (
		<nav 
		className={"w-full sticky top-0 px-24 py-6 text-gray-900 flex justify-between items-center " + (props.bg ? `bg-${props.bg}` : "")}>
			{ (props.showTitle) ? (<span className="text-2xl font-light text-slate-700">Стереометрия ЕГЭ</span>) : (<span></span>)}
			<div className="flex items-center flex-row gap-2">
				<Link to={RoutePaths.Catalog}><NavItem>Каталог</NavItem></Link>
				<Link to={RoutePaths.Help}><NavItem>Справка</NavItem></Link>
				<button><NavItem><i className="bi bi-moon" /></NavItem></button>
			</div>
		</nav>
	);
}

export default Nav;