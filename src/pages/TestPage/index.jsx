import { createRandomTest } from 'types/MathTest';

import { useMemo, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';

import Title from './Title';
import ProblemText from './ProblemText';
import SolutionText from './SolutionText';
import Picture from './Picture';

import TestContext from 'contexts/TestContext';

import Layout from 'components/Layout';


function TestPage(props) {
	const { id } = useParams()
	const test = useMemo(() => createRandomTest(), [id])

	const context = {
		test: test
	}

	return (
		<Layout>
			<Layout.Nav showTitle textColor="black" />

			<Layout.ArticleBody className="gap-6">
				<Title color="blue-300" sideNote="Добавлено 6 Февраля 14:49">{test.title}</Title>

				<ProblemText test={test} />

				<Picture test={test} />
				
				<Title color="emerald-400">Решение</Title>

				<SolutionText test={test} />
			</Layout.ArticleBody>

			<Layout.Footer />
		</Layout>
	);
}

export default TestPage;
