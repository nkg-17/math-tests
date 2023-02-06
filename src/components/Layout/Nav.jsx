import { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';

import RoutePaths from 'constants/routePaths';

import AppContext from 'contexts/AppContext';


function NavItem({children, className, style, textColor}) {
	return (
		<span 
		className={`
		px-3 py-2 
		cursor-pointer select-none 
		rounded-lg 
		transition 
		ease-in-out 
		text-${textColor ? textColor : "black"}
		hover:text-black
		hover:bg-slate-200 active:bg-slate-300 ${className}
		shadow-black/50 hover:shadow-md`}
		style={style}>
			{children}
		</span>
	)
}


function Nav({children, className, style, opaque, textColor, showTitle}) {
	const text = textColor ? textColor : (opaque ? "black" : "white");

	return (
		<nav 
		className={`
		w-full h-14 sticky top-0 
		px-24 
		transition 
		ease-in-out 
		bg-${(opaque) ? "white" : "transparent"} 
		shadow-black/10 ${(opaque) ? "shadow-lg" : ""} 
		flex justify-between items-center ${className}`}
		style={style}>
			<Link to={RoutePaths.Home} className="h-full">
				<span 
				className={`
				h-full
				flex items-center 
				text-xl ${(text == "black") ? "text-slate-500" : text} font-light 
				select-none`}>
						{(showTitle) ? "Стереометрия ЕГЭ" : ""}
				</span>
			</Link>
			<div className="flex items-center flex-row gap-2">
				<Link to={RoutePaths.Catalog}>
					<NavItem textColor={text}>Каталог</NavItem>
				</Link>
				<Link to={RoutePaths.Help}>
					<NavItem textColor={text}>Справка</NavItem>
				</Link>
				<button>
					<NavItem textColor={text}><i className="bi bi-moon" /></NavItem>
				</button>
			</div>
		</nav>
	);
}

export default Nav;