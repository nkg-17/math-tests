import { useState } from 'react'
import { Markdown } from 'components/text'
import { Button } from 'components/buttons'
import { ArticleLayout } from 'components/layouts'

import './Solution.css'


function Solution({test}) {
    const [ isOpened, setOpened ] = useState(false)

    const answer = (
        <span className="w-full text-lg">
            <span className="font-bold">Ответ: </span>{test.answer}
        </span>
    )

	const openedSolution = (
		<div className="w-full solution">
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
		</div>
	)

    const openButton = (
        <Button 
        className="mt-6"
        variant="success" 
        onClick={() => setOpened(() => true)}>
            Открыть Решение
        </Button>
    )

    return (isOpened) ? openedSolution : openButton
}

export default Solution