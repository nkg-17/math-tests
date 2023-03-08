import { MarkdownContext } from 'contexts'
import RectMarkdown from 'react-markdown'
import { 
    MarkdownComponents,
    MdUnorderedList,
    MdStrong,
    MdPreformatted,
    MdParagraph,
    MdOrderedList,
    MdListItem,
    MdImage,
    MdHorizontalRule,
    MdHeading,
    MdEmphesized,
    MdCode,
    MdBlockquote,
    MdBreak,
    MdAnchor
 } from './components'


function Markdown({children, preview, processors={}}) {
    return (
        <div className={`w-full text-lg`}>
            <MarkdownContext.Provider value={{preview: preview, processors: processors}}>
                <RectMarkdown 
                children={children} 
                components={MarkdownComponents} />
            </MarkdownContext.Provider>
        </div>
    )
}

export {
    Markdown,
    MdUnorderedList,
    MdStrong,
    MdPreformatted,
    MdParagraph,
    MdOrderedList,
    MdListItem,
    MdImage,
    MdHorizontalRule,
    MdHeading,
    MdEmphesized,
    MdCode,
    MdBlockquote,
    MdBreak,
    MdAnchor
}