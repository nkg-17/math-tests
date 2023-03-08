import { motion } from 'framer-motion'
import { AnimVariants as variants } from 'utils/animations'
import { ArticleLayout } from 'components/layouts'
import Problem from './Problem'
import Solution from './Solution'


export default function Body({test, ...props}) {
    return (
        <motion.div 
        initial={variants.hidden}
        animate={variants.visible}
        exit={variants.hidden}
        transition={variants.normalTime}
        
        className="w-full" 
        {...props}>
            {/*<ArticleLayout.Heading 
            color="border-blue-300" 
            sideNote="Добавлено 6 Февраля 14:49">
                {test.title}
            </ArticleLayout.Heading>*/}
            <Problem test={test} />
            <Solution test={test} />
        </motion.div>
    )
}
