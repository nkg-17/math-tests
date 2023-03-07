import { motion, AnimatePresence } from 'framer-motion'
import { AnimVariants as variants } from 'utils/animations'
import { useState } from 'react'
import { Markdown } from 'components/text'
import { Button } from 'components/buttons'
import { ArticleLayout } from 'components/layouts'


function Solution({test}) {
    const [ isOpened, setOpened ] = useState(false)

    const answer = (
        <span className="w-full text-lg">
            <span className="font-bold">Ответ: </span>{test.answer}
        </span>
    )

	const openedSolution = (
		<motion.div 
        initial={variants.hidden}
        animate={variants.visible}
        transition={variants.normalTime}
        className="w-full" 
        key="openedSolution">
			<ArticleLayout.Heading color="border-emerald-400">
                Решение
            </ArticleLayout.Heading>

			<div className={`w-full`}>
                <Markdown>
				    {test.solution.text}
                </Markdown>
                <br />
                { test.answer && answer }
			</div>
		</motion.div>
	)

    const openButton = (
        <motion.div 
        initial={variants.hidden}
        animate={variants.visible}
        exit={variants.hidden}
        transition={variants.quicker}
        key="openButton"

        className="mt-6 text-center">
            <Button 
            variant="success" 
            onClick={() => setOpened(() => true)}>
                Открыть Решение
            </Button>
        </motion.div>
    )

    return (
        <AnimatePresence mode="wait">
            { (!isOpened) ? openButton : openedSolution }
        </AnimatePresence>
    )
}

export default Solution