import { useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';

import './index.css';

import Problem from './Problem';
import Picture from './Picture';

import AppContext from 'contexts/AppContext';

import Layout from 'components/Layout';


function TestPage(props) {
	const { id } = useParams();
	
	return (
		<Layout>
			<Layout.Nav transparent textColor="black" />

			<Layout.Body className="pt-6">
				Test
			</Layout.Body>

			<Layout.Footer />
		</Layout>
	);
}

export default TestPage;
