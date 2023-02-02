import { useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';

import './index.css';

import Problem from './Problem';
import Picture from './Picture';

import AppContext from 'contexts/AppContext';

import DefaultLayout from 'layouts/DefaultLayout';


function TestPage(props) {
	const { id } = useParams();
	
	return (
		<DefaultLayout>
			TestPage
		</DefaultLayout>
	);
}

export default TestPage;
