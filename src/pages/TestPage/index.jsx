import { createRandomTest } from 'types/MathTest';

import { useMemo, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';

import Title from './Title';
import Problem from './Problem';
import Solution from './Solution';
import Tips from './Tips';
import Picture from './Picture';
import SubmitForm from './SubmitForm';

import TestContext from 'contexts/TestContext';

import Layout from 'components/Layout';


function TestPage(props) {
	const { id } = useParams()
	const test = useMemo(() => createRandomTest(), [id])

	const setNavOpaqueEvent = "setNavOpaque"

	const context = {
		test: test
	}

	return (
		<Layout>
			<Layout.ReactiveNavTarget event={setNavOpaqueEvent} />
			<Layout.ReactiveNav variant="transparent-dark" event={setNavOpaqueEvent} showTitle />

			<Layout.ArticleBody className="gap-6">
				<Title color="border-blue-300" sideNote="Добавлено 6 Февраля 14:49">{test.title}</Title>
				<Problem test={test} />
				<Picture test={test} />
				<Tips test={test} />
				<Solution test={test} />
				<SubmitForm test={test} />
			</Layout.ArticleBody>

			<Layout.Footer />
		</Layout>
	);
}

export default TestPage;
