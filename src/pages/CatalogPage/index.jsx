import { useEffect, useContext } from 'react';

import { createRandomTest } from 'types/MathTest';

import Search from './Search';
import CardGrid from './CardGrid';
import Header from './Header';

import AppContext from 'contexts/AppContext';
import CatalogContext from 'contexts/CatalogContext';

import DefaultLayout from 'layouts/DefaultLayout';


function CatalogPage(props) {
	const contextValue = {
		testList: Array.from({length:2}, (_, i) => createRandomTest()),
		openTest: () => {}
	};

	const bgHeight = "13rem";
	const bgColorStart = "rgb(59,130,246)";
	const bgColorEnd = "#0099ff";
	const bg = `linear-gradient(to bottom, ${bgColorStart} 0, ${bgColorEnd} ${bgHeight}, transparent ${bgHeight} 100%)`;

	return (
		<DefaultLayout style={{background:bg}}>

			{/* How do I scale this thing vertically? */}
			<img style={{position:"absolute",top:"12.9rem",width:"100%",zIndex:-1}} src="wave.svg" />

			<Header />
			<Search className="mb-20" />
			
			<CatalogContext.Provider value={contextValue}>
				<CardGrid />
			</CatalogContext.Provider>
		</DefaultLayout>
	);
}

export default CatalogPage;