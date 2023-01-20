import { createRandomTest } from 'types/MathTest';

import { Container, Stack } from 'react-bootstrap';
import SearchBar from 'components/SearchBar';
import Header from 'components/Header';
import CardGrid from './CardGrid';

import CatalogContext from 'contexts/CatalogContext';


function Catalog(props) {
	const contextValue = {
		testList: Array.from({length: 10}, (_, i) => createRandomTest()),
		openTest: () => {}
	};

	return (
		<>
			<Header />
			<CatalogContext.Provider value={contextValue}>
				<Container className="g-0 pt-5">
					<Stack gap={3}>
						<Stack direction="horizontal" className="justify-content-center">
							<SearchBar style={{width:"25rem"}} />
						</Stack>
						<CardGrid />
					</Stack>
				</Container>
			</CatalogContext.Provider>
		</>
	);
}

export default Catalog;