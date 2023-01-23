import './TestCard.css';

import { useState, useEffect } from 'react';
import { Card, Stack, Badge, Button } from 'react-bootstrap';


function TestCard(props) {
	const [ pic, setPic ] = useState(null);
	
	useEffect(() => {
		let controller = new AbortController();
		const signal = controller.signal;

		fetch("https://api.waifu.pics/sfw/waifu", { signal })
			.then((r) => r.json())
			.then((j) => setPic(j['url']))
			.catch((e) => {})
		
		return () => { if (controller) controller.abort(); };
	}, [])

	return (
		<Card className="TestCard overflow-hidden">
			<Card.Body>
				<Card.Title className="TestCardTitle text-start d-flex align-items-center justify-content-between">
					<span>
						<span>{props.test.title}</span>
						{/*<span className="ms-2 text-muted fw-light" style={{fontSize:"14px"}}>#{props.test.id}</span>*/}
					</span>
				</Card.Title>
				<Card.Text className="TestCardText text-start ">{props.test.problem.text}</Card.Text>
				
				{/*<Stack direction="horizontal" gap={1}>
					<Badge bg="secondary" className="pe-auto" style={{cursor:"pointer"}}>#tag</Badge>
					<Badge bg="secondary" className="pe-auto" style={{cursor:"pointer"}}>#tag</Badge>
					<Badge bg="secondary" className="pe-auto" style={{cursor:"pointer"}}>#tag</Badge>
				</Stack>

				<hr />*/}
			</Card.Body>
		</Card>
	);
}

export default TestCard;