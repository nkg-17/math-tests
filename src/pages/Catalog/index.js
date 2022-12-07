import { Container, Stack, Form, Row, Col } from 'react-bootstrap';


function Catalog(props) {
	return (
		<Container fluid>
			<Stack gap={2}>

				<Row>
					<Col className="col-auto d-flex flex-row justify-content-start">
						<Form.Control placeholder="Search" />
					</Col>
				</Row>

				<Row>
					<Col>
						<Container fluid className="border p-2" style={{ height: "35rem" }}>
							Cards
						</Container>
					</Col>
				</Row>

			</Stack>
		</Container>
	);
}

export default Catalog;