import Title from './Title'


function Solution({className, style, test}) {
	return (
		<>
			<Title color="border-emerald-400">Решение</Title>
			<p className={`w-full text-lg text-start text-slate-900 first-letter:ml-10 ${className}`}
			style={style}>
				{test.solution.text}
			</p>
		</>
	)
}

export default Solution