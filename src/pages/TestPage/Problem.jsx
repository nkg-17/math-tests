import { useMemo } from 'react';
import { Container, Stack, Row, Col, Form, Button } from 'react-bootstrap';

import './index.css';

import { createRandomTest } from 'types/MathTest';


function Problem(props) {
	const test = useMemo(() => createRandomTest(), []);

	return (
		<Container fluid className="Panel px-3 py-3 border rounded bg-white">
			<Stack gap={2}>
				<h1 className="fs-2 fw-light text-start m-0 p-0">{test.title}</h1>
				<div className="text-start fs-5 fw-normal pb-5 pe-4 overflow-scroll" style={{flex:"1"}}>
					<h3 className="fs-4 mt-4">Problem</h3>
					{test.problem.text}
					<h3 className="fs-4 mt-4">Solution</h3>
					{test.solution.text}
				</div>
				<Stack direction="horizontal" gap={3}>
					<Form.Control placeholder="Ответ" size="lg"></Form.Control>
					<Button variant="success" size="lg">Проверить</Button>
				</Stack>
			</Stack>
		</Container>
	);
}

export default Problem;