

function ProblemText({className, style, test}) {
	return (
		<div 
		className={`w-full ${className}`}
		style={style}>
			<p className="text-lg text-slate-900 first-letter:ml-10">{test.problem.text}</p>
		</div>
	)
}

export default ProblemText