import './TestCard.css';

import { Card } from 'react-bootstrap';


function TestCard(props) {
	return (
		<Card>
			<Card.Body>
				<Card.Title className="TestCardTitle">{props.test.title}</Card.Title>
				<Card.Text className="TestCardText">{props.test.problem.text}</Card.Text>
			</Card.Body>
		</Card>
	);
}

export default TestCard;