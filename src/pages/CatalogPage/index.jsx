import { useEffect, useContext } from 'react';
import { Navbar, Nav, Container, Stack, Row, Col } from 'react-bootstrap';

import { createRandomTest } from 'types/MathTest';

import SearchBar from 'components/SearchBar';
import Header from 'components/Header';
import CardGrid from './CardGrid';
import FiltersPanel from './FiltersPanel';

import AppContext from 'contexts/AppContext';
import CatalogContext from 'contexts/CatalogContext';

import DefaultLayout from 'layouts/DefaultLayout';


function CatalogPage(props) {
	const contextValue = {
		testList: Array.from({length: 5}, (_, i) => createRandomTest()),
		openTest: () => {}
	};

	return (
		<DefaultLayout>
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
		</DefaultLayout>
	);
}

export default CatalogPage;