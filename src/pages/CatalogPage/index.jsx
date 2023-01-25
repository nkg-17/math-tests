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
		<>
			<CatalogContext.Provider value={contextValue}>
				<Container className="">
					<Row className="py-4 px-5 g-4">
						{/* #FIXME */}
						<Col lg={1}></Col>
						<Col lg={3}>
							<FiltersPanel />
						</Col>
						<Col lg={7}>
							<Stack gap={4}>
								<Row><Col lg={6}>
									<SearchBar />
								</Col></Row>
								<CardGrid />
							</Stack>
						</Col>
						<Col lg={1}></Col>
					</Row>
				</Container>
			</CatalogContext.Provider>
		</>
	);
}

export default CatalogPage;