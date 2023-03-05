import { createRandomTest } from 'types/MathTest'
import { RemoteStorage } from 'services'

import { useState, useRef, useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'

import { Button } from 'components/buttons'
import { Loader } from 'components/utils'
import Body from './Body'

import { TestContext } from 'contexts';

import { ArticleLayout } from 'components/layouts';


function Test(props) {
	const { id } = useParams()
    const [ state, setState ] = useState('loading')
	const test = useRef(null)

	const setNavOpaqueEvent = "setNavOpaque"

	const context = {
		test: test.current,
	}

    useEffect(() => {
        RemoteStorage.getTest(id)
            .then((t) => {
                test.current = t
                setState('loaded')
            })
    }, [])

	return (
        <TestContext.Provider value={context}>
    		<ArticleLayout>
    			<ArticleLayout.ReactiveNavTarget event={setNavOpaqueEvent} />
    			<ArticleLayout.ReactiveNav variant="transparent-dark" event={setNavOpaqueEvent} showTitle />

                <ArticleLayout.Body>
        			{ 
                        (state == 'loaded') 
                            ? <Body test={context.test} /> 
                            : <Loader className="my-auto mx-auto" />
                    }
                </ArticleLayout.Body>

    			<ArticleLayout.Footer />
    		</ArticleLayout>
        </TestContext.Provider>
	);
}

export default Test;
