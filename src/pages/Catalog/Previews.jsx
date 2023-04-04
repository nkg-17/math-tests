import { useState, useRef, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'

import { Loader } from 'components/utils'

import { useContext } from 'react';

import { RemoteStorage } from 'services'

import PreviewList from './PreviewList';

import { CatalogContext } from 'contexts';


let Tests = null

function Previews(props) {
    const [ progress, setProgress ] = useState(0)
    const tests = useRef([])
	const context = useContext(CatalogContext);

    useEffect(() => {
        let aborted = false
        if (Tests)
            return

        RemoteStorage.getTestIDList()
            .then(async (ids) => {
                if (aborted)
                    return
                
                tests.current = []
                for (let i = 0; i < ids.length; i++) {
                    await RemoteStorage.getTest(ids[i]).then((test) => {
                        if (aborted)
                            return

                        setProgress(() => (i + 1.0) / ids.length)
                        tests.current.push(test)
                    })
                }
            })
            .catch((e) => {
                if (aborted)
                    return
                context.setTestListLoaded('failed', e)
            })

        return () => aborted = true
    }, [])

    useEffect(() => {
        if (Tests)
            context.setTestListLoaded('loaded', Tests)

        if (progress == 1) {
            Tests = tests.current
            context.setTestListLoaded('loaded', tests.current)
        }
    }, [progress])

	return (
        <AnimatePresence mode="wait">
            { 
                (Tests)
                    ? <PreviewList tests={Tests} key={1} />
                    : <Loader progress={progress} className="mx-auto" key={2} />
            }
        </AnimatePresence>
	);
}

export default Previews;