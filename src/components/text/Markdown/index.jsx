import RectMarkdown from 'react-markdown'

import './markdown.css'
import './markdown-preview.css'


function Markdown({children, preview, className, style}) {
    return (
        <div className={`
        w-full
        ${(preview ? "markdown-preview" : "markdown")} 
        ${className}
        `} style={style}>
            <RectMarkdown>
                {children}
            </RectMarkdown>
        </div>
    )
}

export default Markdown