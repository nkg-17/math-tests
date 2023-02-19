import { motion } from 'framer-motion';

import { publish } from 'utils/helpers/events';


function ReactiveNavTarget({event, className, style}) {
	return (
		<motion.div 
		className={`relative top-0 ${className}`}
		style={style}
		onViewportEnter={() => publish(event, {opaque: false})}
		onViewportLeave={() => publish(event, {opaque: true})}>
		</motion.div>
	)
}

export default ReactiveNavTarget