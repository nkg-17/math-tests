import { useState, useContext } from 'react';

import { createRandomTest } from 'types/MathTest';

import Search from './Search';
import CardGrid from './CardGrid';
import Header from './Header';

import AppContext from 'contexts/AppContext';
import CatalogContext from 'contexts/CatalogContext';

import Layout from 'components/Layout';


function CatalogPage(props) {
	const [ navTransparent, setNavTransparent ] = useState(true);
	const contextValue = {
		testList: Array.from({length:2}, (_, i) => createRandomTest()),
		openTest: () => {},
		setNavTransparent: (t) => setNavTransparent(() => t)
	};

	const bgHeight = "13rem";
	const bgColorStart = "rgb(59,130,246)";
	const bgColorEnd = "#0099ff";
	const bg = `linear-gradient(to bottom, ${bgColorStart} 0, ${bgColorEnd} ${bgHeight}, transparent ${bgHeight} 100%)`;

	return (
		<Layout style={{background:bg}}>
			<Layout.Nav transparent={navTransparent} />
			<Layout.Body>
				<CatalogContext.Provider value={contextValue}>
					<img style={{position:"absolute",top:"12.9rem",width:"100%",zIndex:-1}} src="wave.svg" />
					<Header />
					<Search className="mb-20" />
					<CardGrid />
				</CatalogContext.Provider>
			</Layout.Body>
			<Layout.Footer />
		</Layout>
	);
}

export default CatalogPage;