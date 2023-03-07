import { motion } from 'framer-motion'
import { AnimVariants as variants } from 'utils/animations'

import { useContext } from 'react';

import TestPreview from './TestPreview';

import { CatalogContext } from 'contexts';


function PreviewList(props) {
	const context = useContext(CatalogContext);

	return (
		<motion.div 
        initial={variants.hidden}
        animate={variants.visible}
        exit={variants.hidden}
        transition={variants.normalTime}

        className="w-full grid grid-cols-1 divide-y divide-slate-300/100">
			{ context.testList.map((test) => <TestPreview key={test.id} test={test} />) }
		</motion.div>
	);
}

export default PreviewList;