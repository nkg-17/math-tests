import { useState, useEffect } from 'react';
import { Container, Stack, Row, Col, Form, Button } from 'react-bootstrap';
import { useParams, Link } from 'react-router-dom';

import RoutePaths from 'constants/routePaths';

import './index.css';


function Picture(props) {
	const { id } = useParams();
	const [ pic, setPic ] = useState(null);
	
	useEffect(() => {
		let controller = new AbortController();
		const signal = controller.signal;

		fetch("https://api.waifu.pics/sfw/waifu", { signal })
			.then((r) => r.json())
			.then((j) => setPic(j['url']))
			.catch((e) => {})
		
		return () => { if (controller) controller.abort(); };
	}, []);

	const style = (pic) ? {backgroundImage:`url(${pic})`} : {};

	return (
		<Container fluid className="Panel p-3 border rounded bg-white">
			<Stack gap={2}>
				<div className="w-100 h-100 Picture" style={style}></div>
				<Stack 
				direction="horizontal" 
				gap={3} 
				className="w-100 d-flex flex-row justify-content-end">
					<Link to={RoutePaths.Catalog}>
						<Button className="text-muted" variant="light" size="lg">Следующая задача</Button>
					</Link>
				</Stack>
			</Stack>
			
		</Container>
	);
}

export default Picture;