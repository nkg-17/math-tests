import { useContext } from 'react';
import { Form, Container, Stack, Button } from 'react-bootstrap';

import CatalogContext from 'contexts/CatalogContext';


function FilterPanel(props) {
	const context = useContext(CatalogContext);

	return (
		<Container fluid="sm" className="rounded border bg-light">
			<Form>
				<Form.Check type="checkbox" id="1" label="Checkbox"/>
				<Form.Check type="checkbox" id="2" label="Checkbox" />
			</Form>
		</Container>
	);
}

export default FilterPanel;