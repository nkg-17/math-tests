import { useEffect, useContext } from 'react';

import { createRandomTest } from 'types/MathTest';

import Search from './Search';
import CardGrid from './CardGrid';
import Header from './Header';

import AppContext from 'contexts/AppContext';
import CatalogContext from 'contexts/CatalogContext';

import DefaultLayout from 'layouts/DefaultLayout';

import './index.css';


function CatalogPage(props) {
	const contextValue = {
		testList: Array.from({length: 3}, (_, i) => createRandomTest()),
		openTest: () => {}
	};

	return (
		<DefaultLayout className="Catalog">
			<Header />
			<Search className="mb-20" />
			
			<CatalogContext.Provider value={contextValue}>
				<CardGrid />
			</CatalogContext.Provider>
		</DefaultLayout>
	);
}

export default CatalogPage;