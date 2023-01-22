import { useState, useEffect } from 'react';
import { Card, Stack, Button, Form } from 'react-bootstrap';


function FiltersPanel(props) {
	return (
		<Card className="overflow-hidden">
			<Card.Body>
				<Card.Title className="text-start text-nowrap">Сортировать</Card.Title>
				<Card.Text className="text-start ">
					<Form>
						<Form.Check type="radio" name="sort" id="sort.1" label="Сначало новые" checked />
						<Form.Check type="radio" name="sort" id="sort.2" label="Сначало старые" />
					</Form>
				</Card.Text>

				<hr />

				<Card.Title className="text-start text-nowrap">Фильтры</Card.Title>
				<Card.Text className="text-start ">
					<Form>
						<Form.Check type="checkbox" name="filter" id="filter.1" label="Алгебра" />
						<Form.Check type="checkbox" name="filter" id="filter.2" label="Тригонометрия" />
						<Form.Check type="checkbox" name="filter" id="filter.3" label="Прямоугольники" />
					</Form>
				</Card.Text>
				<Stack direction="horizontal" gap="2">
					<Button size="sm" variant="outline-secondary">Выбрать все</Button>
					<Button size="sm" variant="outline-secondary">Очистить</Button>
				</Stack>
			</Card.Body>
		</Card>
	);
}

export default FiltersPanel;