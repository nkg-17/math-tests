import { Container } from 'react-bootstrap';


function Header(props) {
	return (
		<Container fluid className="bg-white d-flex flex-row justify-content-between">
			<h1 className="vw-100 m-0 p-0 text-center fs-1 fw-light">Стереометрия ЕГЭ</h1>
		</Container>
	);
}

export default Header;