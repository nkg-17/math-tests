import { useContext } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import TestCard from './TestCard';

import CatalogContext from 'contexts/CatalogContext';


function CardGrid(props) {
	const context = useContext(CatalogContext);

	return (
		<Container className="g-0">
			<Row className="gx-4 gy-3">
				{
					context.testList.map((test) => {
						return (
							<Col lg={4} md={6} sm={12} key={test.id}>
								<TestCard test={test} />
							</Col>
						);
					})
				}
			</Row>
		</Container>
	);
}

export default CardGrid;