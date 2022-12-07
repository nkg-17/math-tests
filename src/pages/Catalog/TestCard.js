import { Card } from 'react-bootstrap';


function TestCard(props) {
	return (
		<Card>
			<Card.Body>
				<Card.Title>{props.test}</Card.Title>
				<Card.Text>Text</Card.Text>
			</Card.Body>
		</Card>
	);
}

export default TestCard;