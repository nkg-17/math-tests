import { motion, AnimatePresence } from 'framer-motion'

import { unwrapError } from 'utils/helpers/fields'

import { createRandomTest } from 'types/MathTest'
import { RemoteStorage } from 'services'

import { useState, useRef, useEffect, useContext, forwardRef } from 'react'
import { useParams } from 'react-router-dom'

import { Button } from 'components/buttons'
import { Loader } from 'components/utils'
import { Alert } from 'components/utils'
import Body from './Body'

import { TestContext } from 'contexts';

import { ArticleLayout } from 'components/layouts';


function Test() {
	const { id } = useParams()
    const [ state, setState ] = useState('loading')
	const test = useRef(null)
    const error = useRef(null)

	const setNavOpaqueEvent = "setNavOpaque"

	const context = {
		test: test.current,
	}

    useEffect(() => {
        let aborted = false

        RemoteStorage.getTest(id)
            .then((t) => {
                if (aborted)
                    return

                test.current = t
                setState(() => 'loaded')
            })
            .catch((e) => {
                if (aborted)
                    return
                error.current = e
                setState(() => 'failed')
            })

        return () => aborted = false
    }, [])

    let contents = null
    if (state == 'loaded')
        contents = (<Body test={context.test} key={1} />)
    else if (state == 'failed') {
        contents = (<Alert key={2} error={error.current} />)
    }
    else
        contents = (<Loader className="my-auto mx-auto" key={2} />)

	return (
		<ArticleLayout>
			<ArticleLayout.ReactiveNavTarget event={setNavOpaqueEvent} />
			<ArticleLayout.ReactiveNav variant="transparent-dark" event={setNavOpaqueEvent} showTitle />

            <ArticleLayout.Body>
                <TestContext.Provider value={context}>
                <AnimatePresence mode="wait">
                    { contents }
                </AnimatePresence>
                </TestContext.Provider>
            </ArticleLayout.Body>

			<ArticleLayout.Footer />
		</ArticleLayout>
	)
}

export default Test;
