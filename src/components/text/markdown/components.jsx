import { useContext, createElement } from 'react'
import { MarkdownContext } from 'contexts'

import './components.css'


const previewText = "markdown-preview text-slate-500 not-italic font-normal"
const normalTextColor = "text-slate-700"
const baseTextSize = "text-lg"

export function MdAnchor({preview, href, children, ...props}) {
    const classes = (preview) 
        ? `${previewText}`
        : `${normalTextColor} ${baseTextSize}
            bg-teal-50 
            border-b 
            border-sky-300 
            hover:bg-teal-100
            hover:border-sky-500`;

    return (preview)
        ? (
            <span className={classes}>
                {children}
            </span>
        ) 
        : (
            <a href={href} className={classes} target="_blank">
                {children}
            </a>
        )
}

export function MdBlockquote({preview, children, ...props}) {
    const classes = (preview) 
        ? `${previewText}`
        : `${normalTextColor} ${baseTextSize}
            mx-4 my-4 pl-3 py-4
            border-l-8 border-gray-300 bg-gray-100`;

    return (
        <blockquote className={classes}>
            {children}
        </blockquote>
    )
}

export function MdBreak({preview, children, ...props}) {
    const classes = (preview) 
        ? ``
        : ``;

    return (
        <br className={classes}>
            {children}
        </br>
    )
}

export function MdCode({preview, inline, children, ...props}) {
    const classes = (preview) 
        ? `hidden`
        : (inline)
            ? `${baseTextSize} p-1 rounded-md bg-gray-100 text-slate-700`
            : ``; // `pre` handles multiline code blocks

    return (
        <code className={classes}>
            {children}
        </code>
    )
}

export function MdEmphesized({preview, children, ...props}) {
    const classes = (preview) 
        ? `${previewText}`
        : `${normalTextColor} ${baseTextSize}`;

    return (
        <em className={classes}>
            {children}
        </em>
    )
}

export function MdHeading({preview, level, children, ...props}) {
    const headingLevel = {
        1: "text-4xl",
        2: "text-3xl",
        3: "text-2xl",
        4: "text-xl",
        5: baseTextSize,
    };
    const classes = (preview) 
        ? `${previewText}`
        : `${normalTextColor} ${headingLevel[level]}`;

    return (
        <h5 className={classes}>
            {children}
        </h5>
    )
}

export function MdHorizontalRule({preview, children, ...props}) {
    const classes = (preview) 
        ? `hidden`
        : `my-6 border-gray-300`;

    return (
        <hr className={classes}>
            {children}
        </hr>
    )
}

export function MdImage({preview, src, children, ...props}) {
    const classes = (preview) 
        ? `hidden`
        : `mx-auto my-2`;

    return (
        <img src={src} className={classes}>
            {children}
        </img>
    )
}

export function MdListItem({preview, children, ...props}) {
    const classes = (preview) 
        ? `hidden`
        : `${normalTextColor} ${baseTextSize}`;

    return (
        <li className={classes}>
            {children}
        </li>
    )
}

export function MdOrderedList({preview, children, ...props}) {
    const classes = (preview) 
        ? `hidden`
        : `list-decimal list-inside ${normalTextColor} ${baseTextSize}`;

    return (
        <ol className={classes}>
            {children}
        </ol>
    )
}

export function MdParagraph({preview, children, ...props}) {
    const classes = (preview) 
        ? `${previewText}`
        : `${normalTextColor} ${baseTextSize} mb-1.5`;

    return (
        <p className={classes}>
            {children}
        </p>
    )
}

export function MdPreformatted({preview, children, ...props}) {
    const classes = (preview) 
        ? `hidden`
        : ` ${baseTextSize} 
        overflow-scroll 
        my-2 px-4 py-3 
        rounded-md 
        bg-gray-100 text-slate-700`;

    return (
        <pre className={classes}>
            {children}
        </pre>
    )
}

export function MdStrong({preview, children, ...props}) {
    const classes = (preview) 
        ? `${previewText}`
        : `${normalTextColor} ${baseTextSize}`;

    return (
        <strong className={classes}>
            {children}
        </strong>
    )
}

export function MdUnorderedList({preview, children, ...props}) {
    const classes = (preview) 
        ? `hidden`
        : `list-disc list-inside ${normalTextColor} ${baseTextSize}`;

    return (
        <ul className={classes}>
            {children}
        </ul>
    )
}

/* Some bullshittery here */

function ContextAwareComponent(component) {
    function wrapper({children, ...props}) {
        const context = useContext(MarkdownContext)
        return createElement(
            component, 
            { preview: context.preview, ...props }, 
            children
        )
    }
    return wrapper;
}

const MarkdownComponents = {
    "ul": ContextAwareComponent(MdUnorderedList),
    "strong": ContextAwareComponent(MdStrong),
    "pre": ContextAwareComponent(MdPreformatted),
    "p": ContextAwareComponent(MdParagraph),
    "ol": ContextAwareComponent(MdOrderedList),
    "li": ContextAwareComponent(MdListItem),
    "img": ContextAwareComponent(MdImage),
    "hr": ContextAwareComponent(MdHorizontalRule),
    "h1": ContextAwareComponent(MdHeading),
    "h2": ContextAwareComponent(MdHeading),
    "h3": ContextAwareComponent(MdHeading),
    "h4": ContextAwareComponent(MdHeading),
    "h5": ContextAwareComponent(MdHeading),
    "em": ContextAwareComponent(MdEmphesized),
    "code": ContextAwareComponent(MdCode),
    "blockquote": ContextAwareComponent(MdBlockquote),
    "br": ContextAwareComponent(MdBreak),
    "a": ContextAwareComponent(MdAnchor),
}

export { MarkdownComponents };