import { createRandomTest } from 'types/MathTest';

import { Navbar, Nav, Container, Stack, Row, Col } from 'react-bootstrap';

import SearchBar from 'components/SearchBar';
import Header from 'components/Header';

import CardGrid from './CardGrid';
import FiltersPanel from './FiltersPanel';

import CatalogContext from 'contexts/CatalogContext';


function CatalogPage(props) {
	const contextValue = {
		testList: Array.from({length: 3}, (_, i) => createRandomTest()),
		openTest: () => {}
	};

	return (
		<Container className="py-2">
			<CatalogContext.Provider value={contextValue}>
				<Row className="g-4">
					<Col lg={3}>
						<FiltersPanel />
					</Col>
					<Col lg={9}>
						<Stack gap={4}>
							<Row>
								<Col lg={5}>
									<SearchBar />
								</Col>
								<Col></Col>
							</Row>
							<CardGrid />
						</Stack>
					</Col>
				</Row>
			</CatalogContext.Provider>
		</Container>
	);
}

export default CatalogPage;