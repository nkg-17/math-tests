import { createRandomTest } from 'types/MathTest';

import { useMemo, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';

import Title from './Title';
import ProblemText from './ProblemText';
import SolutionText from './SolutionText';
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
			<Layout.ReactiveNav event={setNavOpaqueEvent} showTitle textColor="black" />

			<Layout.ArticleBody className="gap-6">
				<Title color="border-blue-300" sideNote="Добавлено 6 Февраля 14:49">{test.title}</Title>

				<ProblemText test={test} />

				<Picture test={test} />

				<Title color="border-emerald-400">Решение</Title>

				<SolutionText test={test} />
				
				<SubmitForm test={test} />
			</Layout.ArticleBody>

			<Layout.Footer />
		</Layout>
	);
}

export default TestPage;
