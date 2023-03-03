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