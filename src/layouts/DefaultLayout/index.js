import './index.css';

import { Row, Col } from 'react-bootstrap';

import Header from 'components/Header';
import SideMenu from 'components/SideMenu';


function DefaultLayout(props) {
	return (
		<Row className="vw-100 g-0">
			<Col className="col-auto">
				<SideMenu />
			</Col>
			<Col>
				<Header />
				<div className="LayoutContent px-5 pb-5 pt-4">
					{props.children}
				</div>
			</Col>
		</Row>
	);
}

export default DefaultLayout;
