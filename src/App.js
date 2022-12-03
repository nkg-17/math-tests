import './App.css';

import { Row, Col } from 'react-bootstrap';

import Pages from 'components/Pages';
import Header from 'components/Header';
import SideMenu from 'components/SideMenu';


function App() {
	return (
		<div className="App">
			<Row className="vw-100 g-0">
				<Col className="col-auto">
					<SideMenu />
				</Col>
				<Col>
					<Header />
					<Pages />
				</Col>
			</Row>
		</div>
	);
}

export default App;
