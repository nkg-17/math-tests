import { createRandomTest } from 'types/MathTest';

import { Navbar, Nav, Container, Stack, Row, Col } from 'react-bootstrap';

import SearchBar from 'components/SearchBar';
import Header from 'components/Header';

import CardGrid from './CardGrid';
import FilterPanel from './FilterPanel';

import CatalogContext from 'contexts/CatalogContext';


function Catalog(props) {
	const contextValue = {
		testList: Array.from({length: 3}, (_, i) => createRandomTest()),
		openTest: () => {}
	};

	return (
		<>
			<Header />

			<CatalogContext.Provider value={contextValue}>
				<Container fluid>
					<Row>
						<Col lg={3} className="p-4 bg-light">
							Filters
						</Col>
						<Col lg={9} className="p-4 bg-light">
							<Stack gap={4}>
								<Row><Col lg={4}>
									<SearchBar />
								</Col></Row>
								<CardGrid />
							</Stack>
						</Col>
					</Row>
				</Container>
			</CatalogContext.Provider>
		</>
	);
}

export default Catalog;