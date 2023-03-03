import { MarkdownContext } from 'contexts'
import RectMarkdown from 'react-markdown'
import { MarkdownComponents } from './components'


function Markdown({children, preview}) {
    return (
        <div className={`w-full`}>
            <MarkdownContext.Provider value={{preview: preview}}>
                <RectMarkdown 
                children={children} 
                components={MarkdownComponents} />
            </MarkdownContext.Provider>
        </div>
    )
}

export default Markdown