import { Navbar, Nav, Container } from 'react-bootstrap';


function Header(props) {
	return (
		<Navbar sticky="top" bg="white" style={{boxShadow: "0 0 2rem rgba(0,0,0,0.07)"}}>
			<Container>
				<Navbar.Brand href="/">Стереометрия ЕГЭ</Navbar.Brand>
				<Navbar.Collapse className="justify-content-start">
					<Nav>
						<Nav.Link href="/help">Справка</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>

		// <Container 
		// fluid 
		// className="vw-100 m-0 px-5 py-3 position-sticky bg-white"
		// style={{boxShadow: "0 0 2rem rgba(0,0,0,0.07)"}}>
		// 	<h1 className="m-0 p-0 fs-5 fw-bold fw-light">Стереометрия ЕГЭ</h1>
		// </Container>
	);
}

export default Header;