import { motion } from 'framer-motion'
import { AnimVariants as variants } from 'utils/animations'

import { WrapScrollReset } from 'components/utils'

import Nav from './Nav'
import ReactiveNav from './ReactiveNav'
import ReactiveNavTarget from './ReactiveNavTarget'
import Heading from './Heading'
import Body from './Body'
import Footer from './Footer'


function ArticleLayout({children, className, style, ...props}) {
	return (
        <WrapScrollReset>
    		<motion.div
            {...props}
            initial={variants.hidden}
            animate={variants.visible}
            exit={variants.hidden}
            transition={variants.longer}
            className={"w-screen min-h-screen m-0 p-0 flex flex-col items-center " + className} 
    		style={style}>
    			{children}
    		</motion.div>
        </WrapScrollReset>
	);
}

ArticleLayout.Nav = Nav;
ArticleLayout.ReactiveNav = ReactiveNav;
ArticleLayout.ReactiveNavTarget = ReactiveNavTarget;
ArticleLayout.Heading = Heading;
ArticleLayout.Body = Body;
ArticleLayout.Footer = Footer;

export default ArticleLayout;
