import { Markdown } from 'components/text'


function Problem({className, style, test}) {
	return (
		<div 
		className={`w-full text-lg ${className}`}
		style={style}>
            <Markdown>
                {test.problem.text}
            </Markdown>
		</div>
	)
}

export default Problem