import { useEffect, useContext, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { AnimVariants as variants } from 'utils/animations'

import TestPreview from './TestPreview'

import { CatalogContext } from 'contexts'
import { subscribe, unsubscribe } from 'utils/helpers/events'


export default function PreviewList({tests, ...props}) {
    const context = useContext(CatalogContext)

    function calcTestOrder(searchWords) {
        function rateText(t) {
            let wordCount = 0
            for (let i = 0; i < searchWords.length; i++) {
                if (t.toLowerCase().indexOf(searchWords[i].toLowerCase()) != -1) {
                    wordCount++;
                    break;
                }
            }
            return wordCount;
        }

        return tests.map(
            (t, i) => i
        ).sort(
            (ai, bi) => {
                return rateText(tests[bi].problem) - rateText(tests[ai].problem)
            }
        )
    }
    
    const [testOrder, setTestOrder] = useState(() => calcTestOrder([]))

    function SearchUpdateListener(search) {
        const newOrder = calcTestOrder(search.detail.split(" "))
        if (testOrder.toString() !== newOrder.toString())
            setTestOrder(() => newOrder)
    }

    useEffect(() => {
        subscribe(context.searchEvent, SearchUpdateListener)
        return () => unsubscribe(context.searchEvent, SearchUpdateListener)
    }, [])

    const testPreviews = testOrder.map((i) => <TestPreview key={tests[i].id} test={tests[i]} />)

    return (
        <motion.div
        initial={variants.hidden}
        animate={variants.visible}
        exit={variants.hidden}
        transition={variants.longer}
        className="w-full grid grid-cols-1 divide-y divide-slate-300/100">
            {testPreviews}
        </motion.div>
    )
}
