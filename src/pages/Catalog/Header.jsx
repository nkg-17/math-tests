import { useContext } from 'react';
import { motion } from 'framer-motion';

import { publish } from 'utils/helpers/events';

import { ArticleLayout } from 'components/layouts';

import { CatalogContext } from 'contexts';


function Header(props) {
	const context = useContext(CatalogContext);

	return (
		<header className={"pb-16 pt-0 flex flex-col items-center gap-3 " + props.className}>
			<h1 className="w-fit text-5xl font-light text-white">
				Стереометрия ЕГЭ
			</h1>
			<ArticleLayout.ReactiveNavTarget 
			event={context.setNavOpaqueEvent} />
			<h2 className="w-fit text-xl font-light text-slate-200">
				Каталог задач для подготовки к экзамену
			</h2>
		</header>
	);
}

export default Header;