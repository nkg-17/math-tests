import { ArticleLayout } from 'components/layouts';


function Solution({className, style, test}) {
	return (
		<>
			<ArticleLayout.Heading color="border-emerald-400">
                Решение
            </ArticleLayout.Heading>
			<p className={`w-full text-lg text-start text-slate-900 first-letter:ml-10 ${className}`}
			style={style}>
				{test.solution.text}
			</p>
		</>
	)
}

export default Solution