import { useEffect, useContext } from 'react';
import { Container, Stack, Row, Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

import './index.css';

import Problem from './Problem';
import Picture from './Picture';

import AppContext from 'contexts/AppContext';

import MinimalLayout from 'layouts/MinimalLayout';


function TestPage(props) {
	const { id } = useParams();
	
	return (
		<MinimalLayout>
			<Container fluid className="border p-0">
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
