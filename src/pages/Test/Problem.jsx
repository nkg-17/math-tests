import { Markdown } from 'components/text'
import { replaceTestImageURLs } from 'utils/helpers/markdown'


function Problem({className, style, test}) {
	return (
		<div 
		className={`w-full text-lg ${className}`}
		style={style}>
            <Markdown processors={{img: replaceTestImageURLs(test.id)}}>
                {test.problem}
            </Markdown>
		</div>
	)
}

export default Problem