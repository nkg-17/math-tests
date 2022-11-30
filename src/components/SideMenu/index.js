import './SideMenu.css';

import { Container, Button } from 'react-bootstrap';


function SideMenu(props) {
	return (
		<Container className="SideMenu vh-100 d-flex flex-column justify-content-center">
			<Button variant="light"><i className="bi bi-dice-5" /></Button>
			<Button variant="light"><i className="bi bi-files" /></Button>
			<Button variant="light"><i className="bi bi-pencil-square" /></Button>
			<Button variant="light"><i className="bi bi-info-circle" /></Button>
		</Container>
	);
}

export default SideMenu;