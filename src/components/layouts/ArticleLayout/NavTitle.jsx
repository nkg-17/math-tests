import { Link } from 'react-router-dom';

import { RoutePaths } from 'utils/constants';


function NavTitle({show}) {
	return (
		<Link to={RoutePaths.Home} className="h-full">
			<span 
			className={`
			h-full
			flex items-center 
			text-xl text-slate-500 font-light 
            hover:text-slate-700
            transition ease-in-out
			select-none`}>
				{(show) ? "Стереометрия ЕГЭ" : ""}
			</span>
		</Link>
	)
}

export default NavTitle