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
		testList: Array.from({length: 3}, (_, i) => createRandomTest()),
		openTest: () => {}
	};

	return (
		<DefaultLayout>
			<Container className="py-1">
				<CatalogContext.Provider value={contextValue}>
					<Stack gap={3}>
						<Row>
							<Col lg={3}></Col>
							<Col lg={5}>
								<SearchBar />
							</Col>
							<Col></Col>
						</Row>
						<Row className="g-4">
							<Col lg={3}>
								<FiltersPanel />
							</Col>
							<Col lg={9}>
								<Stack gap={4}>
									<CardGrid />
								</Stack>
							</Col>
						</Row>
					</Stack>
				</CatalogContext.Provider>
			</Container>
		</DefaultLayout>
	);
}

export default CatalogPage;