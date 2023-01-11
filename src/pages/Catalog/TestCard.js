import './TestCard.css';

import { Card, Stack, Badge } from 'react-bootstrap';


function TestCard(props) {
	return (
		<Card className="user-select-none overflow-hidden">
			<Card.Body className="TestCardBackground" style={{width:"100%", height:"100%"}}>
				<div style={{margin: "5rem 0"}}></div>
				<Card.Title className="TestCardTitle text-start text-nowrap">{props.test.title}</Card.Title>
				<Card.Text className="TestCardText text-start ">{props.test.problem.text}</Card.Text>
				<hr />
				<Stack direction="horizontal" gap={1}>
					<Badge bg="secondary">#tag</Badge>
					<Badge bg="secondary">#tag</Badge>
					<Badge bg="secondary">#tag</Badge>
				</Stack>
			</Card.Body>
		</Card>
	);
}

export default TestCard;