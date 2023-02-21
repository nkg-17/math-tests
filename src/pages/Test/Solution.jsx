import { ArticleLayout } from 'components/layouts';


function Solution({test}) {
	return (
		<>
			<ArticleLayout.Heading color="border-emerald-400">
                Решение
            </ArticleLayout.Heading>
			<p className={`w-full text-lg text-start text-slate-900 first-letter:ml-10`}>
				{test.solution.text}
                <br />
                {
                    (test.answer) ? (
                        <span className="w-full ml-10">
                            <span className="font-bold">Ответ: </span>{test.answer}
                        </span>
                    ) : (<></>)
                }
			</p>
		</>
	)
}

export default Solution