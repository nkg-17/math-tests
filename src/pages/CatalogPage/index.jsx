import { createRandomTest } from 'types/MathTest';

import Search from './Search';
import CardGrid from './CardGrid';
import Header from './Header';

import CatalogContext from 'contexts/CatalogContext';

import Layout from 'components/Layout';


function CatalogPage(props) {
	const contextValue = {
		testList: Array.from({length:4}, (_, i) => createRandomTest()),
		setNavOpaqueEvent: "setNavOpaque"
	};

	const bgHeight = "13rem";
	const bgColorStart = "rgb(59,130,246)";
	const bgColorEnd = "#0099ff";
	const bg = `linear-gradient(to bottom, ${bgColorStart} 0, ${bgColorEnd} ${bgHeight}, transparent ${bgHeight} 100%)`;

	return (
		<Layout style={{background:bg}}>
			<CatalogContext.Provider value={contextValue}>
				<Layout.ReactiveNav event={contextValue.setNavOpaqueEvent} />
				<Layout.ArticleBody>
						<img 
						className="select-none  pointer-events-none"
						style={{position:"absolute",top:"12.9rem",width:"100%",zIndex:-1}} 
						src="wave.svg" />
						
						<Header />
						<Search className="mb-20" />
						<CardGrid />
				</Layout.ArticleBody>
				<Layout.Footer />
			</CatalogContext.Provider>
		</Layout>
	);
}

export default CatalogPage;