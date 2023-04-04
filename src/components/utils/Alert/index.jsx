import { motion } from 'framer-motion'
import { AnimVariants as variants } from 'utils/animations'

import { Link } from 'react-router-dom'
import { unwrapError } from 'utils/helpers/fields'
import { RoutePaths, Constants } from 'utils/constants'


export default function Alert({children, className, style, error=null}) {
    let errorList = null
    if (error != null) {
        errorList = (
            <ul className="mb-2">
                {unwrapError(error).map((e, i) => (<li key={i}>{e.message}</li>))}
            </ul>
        )
    }

    return (
        <motion.div
        initial={variants.hidden}
        animate={variants.visible}
        exit={variants.hidden}
        transition={variants.normalTime}

        className={`
        px-6 py-3
        bg-rose-300 
        border rounded-lg border-rose-400 
        text-rose-900
        ${className}`}
        style={{minWidth:"500px", ...style}}>
            <h1 className="mb-2 text-2xl flex items">
                <i className="mr-4 bi bi-exclamation-triangle-fill" style={{fontSize:24}} />
                Ошибка
            </h1>
            <div className="mb-3">
                {errorList}
                {children}
            </div>
            <hr className="border-rose-400 mb-3" />
            <div className="flex flex-row gap-3">
                <a 
                href={Constants.SupportLink}
                target="_blank" 
                className="text-1xl font-normal underline">
                    <span>Сообщить об Ошибке</span>
                </a>
            </div>
        </motion.div>
    )
}
