import { MarkdownContext } from 'contexts'
import RectMarkdown from 'react-markdown'
import rehypeKatex from 'rehype-katex'
import remarkMath from 'remark-math'
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

 import 'katex/dist/katex.min.css'


function Markdown({children, preview, processors={}}) {
    return (
        <div className={`w-full text-lg`}>
            <MarkdownContext.Provider value={{preview: preview, processors: processors}}>
                <RectMarkdown 
                children={children} 
                components={MarkdownComponents}
                remarkPlugins={[remarkMath]}
                rehypePlugins={[rehypeKatex]}
                />
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