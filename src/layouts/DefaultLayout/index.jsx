import { motion } from 'framer-motion';

import Nav from 'components/Nav';
import Footer from 'components/Footer';

import AppRouter from 'components/AppRouter';


function DefaultLayout(props) {
	return (
		<div className={"w-screen min-h-screen bg-white m-0 p-0 flex flex-col items-center " + props.className}>
			<Nav />
			<motion.main
			initial={{opacity:0}} 
        	animate={{opacity:1}} 
        	className="w-2/3 mb-20 p-0 flex-1 flex flex-col items-center">
				{props.children}
			</motion.main>
			<Footer />
		</div>
	);
}

export default DefaultLayout;
