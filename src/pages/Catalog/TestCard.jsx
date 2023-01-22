import './TestCard.css';

import { useState, useEffect } from 'react';
import { Card, Stack, Badge } from 'react-bootstrap';


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
			<div className="TestCardImgBounds g-0">
				{ pic && <Card.Img className="TestCardImg" src={pic} />}
			</div>

			<Card.Body>
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