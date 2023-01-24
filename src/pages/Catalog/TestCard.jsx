import './TestCard.css';

import { useState, useEffect } from 'react';
import { Card, Stack, Badge, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


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

	const style = (pic) ? {backgroundImage:`url(${pic})`} : {};

	return (
		<Link to={`/test/${props.test.id}`} className="text-reset text-decoration-none">
			<Card className="TestCard">
				<div className="TestCardImg" style={style}></div>

				<Card.Body className="TestCardBody">
					<Card.Title className="TestCardHeader">
						<span>{props.test.title}</span>
							{/*<span className="ms-2 text-muted fw-light" style={{fontSize:"14px"}}>#{props.test.id}</span>*/}
					</Card.Title>
					
					<Card.Text className="TestCardText">{props.test.problem.text}</Card.Text>
					
					<hr />

					<Stack direction="horizontal" gap={1}>
						<Badge bg="secondary">#tag</Badge>
						<Badge bg="secondary">#tag</Badge>
						<Badge bg="secondary">#tag</Badge>
					</Stack>
				</Card.Body>
			</Card>
		</Link>
	);
}

export default TestCard;