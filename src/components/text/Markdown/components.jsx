import { useContext } from 'react'
import { MarkdownContext } from 'contexts'

import './components.css'


const previewText = "markdown-preview text-slate-500 not-italic font-normal"
const normalText = "text-slate-700"

function a({href, children, ...props}) {
    const context = useContext(MarkdownContext);
    const classes = (context.preview) 
        ? `${previewText}`
        : `${normalText} 
            bg-teal-50 
            border-b 
            border-sky-300 
            hover:bg-teal-100
            hover:border-sky-500`;

    return (context.preview)
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

function blockquote({children, ...props}) {
    const context = useContext(MarkdownContext);
    const classes = (context.preview) 
        ? `${previewText}`
        : `${normalText} 
            mx-4 my-4 pl-3 py-4
            border-l-8 border-gray-300 bg-gray-100`;

    return (
        <blockquote className={classes}>
            {children}
        </blockquote>
    )
}

function br({children, ...props}) {
    const context = useContext(MarkdownContext);
    const classes = (context.preview) 
        ? ``
        : ``;

    return (
        <br className={classes}>
            {children}
        </br>
    )
}

function code({inline, children, ...props}) {
    const context = useContext(MarkdownContext);
    const classes = (context.preview) 
        ? `hidden`
        : (inline)
            ? `p-1 rounded-md bg-gray-100 text-slate-700`
            : ``; // `pre` handles multiline code blocks

    return (
        <code className={classes}>
            {children}
        </code>
    )
}

function em({children, ...props}) {
    const context = useContext(MarkdownContext);
    const classes = (context.preview) 
        ? `${previewText}`
        : `${normalText}`;

    return (
        <em className={classes}>
            {children}
        </em>
    )
}

function heading({level, children, ...props}) {
    const context = useContext(MarkdownContext);
    const headingLevel = {
        1: "text-4xl",
        2: "text-3xl",
        3: "text-2xl",
        4: "text-xl",
        5: "text-lg",
    };
    const classes = (context.preview) 
        ? `${previewText}`
        : `${normalText} ${headingLevel[level]}`;

    return (
        <h5 className={classes}>
            {children}
        </h5>
    )
}

function hr({children, ...props}) {
    const context = useContext(MarkdownContext);
    const classes = (context.preview) 
        ? `hidden`
        : `my-6 border-gray-300`;

    return (
        <hr className={classes}>
            {children}
        </hr>
    )
}

function img({src, children, ...props}) {
    const context = useContext(MarkdownContext);
    const classes = (context.preview) 
        ? `hidden`
        : ``;

    return (
        <img src={src} className={classes}>
            {children}
        </img>
    )
}

function li({children, ...props}) {
    const context = useContext(MarkdownContext);
    const classes = (context.preview) 
        ? `hidden`
        : `${normalText}`;

    return (
        <li className={classes}>
            {children}
        </li>
    )
}

function ol({children, ...props}) {
    const context = useContext(MarkdownContext);
    const classes = (context.preview) 
        ? `hidden`
        : `list-decimal list-inside ${normalText}`;

    return (
        <ol className={classes}>
            {children}
        </ol>
    )
}

function p({children, ...props}) {
    const context = useContext(MarkdownContext);
    const classes = (context.preview) 
        ? `${previewText}`
        : `${normalText} mb-1.5`;

    return (
        <p className={classes}>
            {children}
        </p>
    )
}

function pre({children, ...props}) {
    const context = useContext(MarkdownContext);
    const classes = (context.preview) 
        ? `hidden`
        : `my-2 px-3 py-1 rounded-md bg-gray-100 text-slate-700`;

    return (
        <pre className={classes}>
            {children}
        </pre>
    )
}

function strong({children, ...props}) {
    const context = useContext(MarkdownContext);
    const classes = (context.preview) 
        ? `${previewText}`
        : `${normalText}`;

    return (
        <strong className={classes}>
            {children}
        </strong>
    )
}

function ul({children, ...props}) {
    const context = useContext(MarkdownContext);
    const classes = (context.preview) 
        ? `hidden`
        : `list-disc list-inside ${normalText}`;

    return (
        <ul className={classes}>
            {children}
        </ul>
    )
}

const MarkdownComponents = {
    "ul": ul,
    "strong": strong,
    "pre": pre,
    "p": p,
    "ol": ol,
    "li": li,
    "img": img,
    "hr": hr,
    "h1": heading,
    "h2": heading,
    "h3": heading,
    "h4": heading,
    "h5": heading,
    "h6": heading,
    "em": em,
    "code": code,
    "blockquote": blockquote,
    "br": br,
    "a": a,
}

export { MarkdownComponents };
