import { Container, Stack } from 'react-bootstrap';
import SearchBar from 'components/SearchBar';
import CardGrid from './CardGrid';

import CatalogContext from 'contexts/CatalogContext';


function Catalog(props) {
	const contextValue = {
		testList: [1, 2, 3, 4, 5, 6],
		openTest: () => {}
	};

	return (
		<CatalogContext.Provider value={contextValue}>
			<Container fluid>
				<Stack gap={3}>
					<SearchBar onChange={(text) => {}} />
					<CardGrid />
				</Stack>
			</Container>
		</CatalogContext.Provider>
	);
}

export default Catalog;