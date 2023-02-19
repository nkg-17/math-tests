import Title from './Title'


function Problem({className, style, test}) {
	return (
		<div 
		className={`w-full ${className}`}
		style={style}>
			<p className="w-full text-lg text-start text-slate-900 first-letter:ml-10">{test.problem.text}</p>
		</div>
	)
}

export default Problem