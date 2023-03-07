import { motion } from 'framer-motion'
import { AnimVariants as variants } from 'utils/animations'

import TestPreview from './TestPreview'


export default function PreviewList({tests, ...props}) {
    return (
        <motion.div
        initial={variants.hidden}
        animate={variants.visible}
        exit={variants.hidden}
        transition={variants.longer}
        className="w-full grid grid-cols-1 divide-y divide-slate-300/100">
            {tests.map((test) => <TestPreview key={test.id} test={test} />) }
        </motion.div>
    )
}
