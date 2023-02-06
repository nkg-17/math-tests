

function SolutionText({className, style, test}) {
	return (
		<p className={`text-lg text-slate-900 first-letter:ml-10 ${className}`}
		style={style}>
			{test.solution.text}
		</p>
	)
}

export default SolutionText