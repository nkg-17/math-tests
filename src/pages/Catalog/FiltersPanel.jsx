import { useState, useEffect } from 'react';
import { Card, Stack, Button, Form } from 'react-bootstrap';


function FiltersPanel(props) {

	// useCallback()
	const formChange = () => {};

	return (
		<Card className="overflow-hidden">
			<Card.Body>
				<Card.Title className="text-start text-nowrap">Сортировать</Card.Title>
				<Form>
					<Form.Check onChange={formChange} type="radio" name="sort" id="sort.1" label="Сначало новые" checked />
					<Form.Check onChange={formChange} type="radio" name="sort" id="sort.2" label="Сначало старые" />
				</Form>

				<hr />

				<Card.Title className="text-start text-nowrap">Категории</Card.Title>
				<Form>
					<Form.Check onChange={formChange} type="checkbox" name="filter" id="filter.1" label="Алгебра" />
					<Form.Check onChange={formChange} type="checkbox" name="filter" id="filter.2" label="Тригонометрия" />
					<Form.Check onChange={formChange} type="checkbox" name="filter" id="filter.3" label="Прямоугольники" />
				</Form>
				<Stack className="mt-2" direction="horizontal" gap="2">
					<Button size="sm" variant="outline-secondary">Выбрать все</Button>
					<Button size="sm" variant="outline-secondary">Очистить</Button>
				</Stack>
			</Card.Body>
		</Card>
	);
}

export default FiltersPanel;