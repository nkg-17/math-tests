import { motion } from 'framer-motion'
import { AnimVariants as variants } from 'utils/animations'
import './Loader.css'


function Loader({
        color="border-slate-400", 
        size="36px", 
        thickness="3px", 
        className, 
        style, 
        ...props}) {
    return (
        <motion.span 
        initial={variants.hidden}
        animate={variants.visible}
        exit={variants.hidden}
        transition={variants.normalTime}

        className={`Loader ${color} ${className}`} 
        style={{width:size, height:size, borderWidth:thickness, ...style}} 

        {...props}
        />
    )
}

export default Loader