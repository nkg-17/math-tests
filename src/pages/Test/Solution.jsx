import { Markdown } from 'components/text'
import { ArticleLayout } from 'components/layouts';


function Solution({test}) {
	return (
		<>
			<ArticleLayout.Heading color="border-emerald-400">
                Решение
            </ArticleLayout.Heading>
			<div className={`w-full text-lg text-start text-slate-900 first-letter:ml-10`}>
                <Markdown>
				    {test.solution.text}
                </Markdown>
                <br />
                {
                    (test.answer) ? (
                        <span className="w-full">
                            <span className="font-bold">Ответ: </span>{test.answer}
                        </span>
                    ) : (<></>)
                }
			</div>
		</>
	)
}

export default Solution