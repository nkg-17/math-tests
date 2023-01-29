import { useEffect, useContext } from 'react';
import { Container, Stack, Row, Col } from 'react-bootstrap';

import './index.css';

import Problem from './Problem';
import Picture from './Picture';

import AppContext from 'contexts/AppContext';

import MinimalLayout from 'layouts/MinimalLayout';


function TestPage(props) {
	return (
		<MinimalLayout>
			<Container fluid className="p-0">
				<Row className="g-4">
					<Col lg={6}>
						<Problem />
					</Col>
					<Col lg={6}>
						<Picture />
					</Col>
				</Row>			
			</Container>
		</MinimalLayout>
	);
}

export default TestPage;
