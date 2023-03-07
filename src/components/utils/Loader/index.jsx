import { motion } from 'framer-motion'
import { AnimVariants as variants } from 'utils/animations'
import './Loader.css'


function Loader({
        color="text-gray-400", 
        size=50, 
        thickness=3, 
        progress=null,
        className, 
        style, 
        ...props}) {

    const isRotating = (progress == null)
    progress = (isRotating ? 0.33 : progress)

    if (progress < 0 || progress > 1) {
        console.error(`'progress' property should be in range from 0 to 1.`)
        progress = 0
    }

    const radius = size / 2
    const innerRadius = radius - thickness * 2
    const circumference = innerRadius * 2 * Math.PI
    const offset = circumference - (progress * circumference)

    const bgCircle = (
        <circle 
        className="Loader-circle-dim"
        stroke="currentColor"
        strokeDasharray={`${circumference} ${circumference}`}
        strokeWidth={thickness}
        r={innerRadius}
        cx={radius}
        cy={radius}/>
    )

    const progressCircle = (
        <circle 
        className={isRotating ? "Loader-circle-rotating" : "Loader-circle"}
        style={{strokeDashoffset: offset}}
        stroke="currentColor"
        strokeDasharray={`${circumference} ${circumference}`}
        strokeWidth={thickness}
        fill="transparent"
        r={innerRadius}
        cx={radius}
        cy={radius}/>
    )

    return (
        <motion.span 
        initial={variants.hidden}
        animate={variants.visible}
        exit={{transition: { delay: 0.35 }, ...variants.hidden}}
        transition={variants.normalTime}
        className={`Loader ${color} ${className}`} 
        style={style}
        {...props}>
            <svg width={radius * 2} height={radius * 2}>
                {bgCircle}
                {progressCircle}
            </svg>
        </motion.span>
    )
}


export default Loader
