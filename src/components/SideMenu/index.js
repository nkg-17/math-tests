import { Container } from 'react-bootstrap';
import TileButton from 'components/Buttons/TileButton';


function SideMenu(props) {
	return (
		<Container className="sticky-top m-0 p-0 border-end w-auto vh-100 d-flex flex-column justify-content-center">
			<TileButton><i className="bi bi-dice-5" /></TileButton>
			<TileButton><i className="bi bi-files" /></TileButton>
			<TileButton><i className="bi bi-pencil-square" /></TileButton>
			<TileButton><i className="bi bi-info-circle" /></TileButton>
		</Container>
	);
}

export default SideMenu;