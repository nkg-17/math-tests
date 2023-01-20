import { createRandomTest } from 'types/MathTest';

import { Container, Stack, Row, Col } from 'react-bootstrap';

import SearchBar from 'components/SearchBar';
import Header from 'components/Header';

import CardGrid from './CardGrid';
import FilterPanel from './FilterPanel';

import CatalogContext from 'contexts/CatalogContext';


function Catalog(props) {
	const contextValue = {
		testList: Array.from({length: 10}, (_, i) => createRandomTest()),
		openTest: () => {}
	};

	return (
		<CatalogContext.Provider value={contextValue}>
			<Container className="g-0">
				<Stack gap={3}>
					<div className="d-flex flex-row justify-content-center">
						<SearchBar style={{width:"25rem"}} />
					</div>
					<Row className="g-3">
						<Col className="col-auto">
							<FilterPanel />
						</Col>
						<Col>
							<CardGrid />
						</Col>
					</Row>
				</Stack>
			</Container>
		</CatalogContext.Provider>
	);
}

export default Catalog;