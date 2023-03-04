import { createRandomTest } from 'types/MathTest';

import { useState, useMemo, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';

import { Button } from 'components/buttons';
import Problem from './Problem';
import Solution from './Solution';
import Tips from './Tips';

import { TestContext } from 'contexts';

import { ArticleLayout } from 'components/layouts';


function Test(props) {
	const { id } = useParams()
	const test = useMemo(() => createRandomTest(), [id])

	const setNavOpaqueEvent = "setNavOpaque"

	const context = {
		test: test,
	}

	return (
        <TestContext.Provider value={context}>
    		<ArticleLayout>
    			<ArticleLayout.ReactiveNavTarget event={setNavOpaqueEvent} />
    			<ArticleLayout.ReactiveNav variant="transparent-dark" event={setNavOpaqueEvent} showTitle />

    			<ArticleLayout.Body>

    				<ArticleLayout.Heading 
                    color="border-blue-300" 
                    sideNote="Добавлено 6 Февраля 14:49">
                        {test.title}
                    </ArticleLayout.Heading>
    			
                	<Problem test={test} />
                    <Solution test={test} />
                    
                </ArticleLayout.Body>

    			<ArticleLayout.Footer />
    		</ArticleLayout>
        </TestContext.Provider>
	);
}

export default Test;
