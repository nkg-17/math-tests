import { motion } from 'framer-motion'
import { useState } from 'react'

import { Button } from 'components/buttons'
import { ArticleLayout } from 'components/layouts';


const animation = {
	initial: { opacity: 0 },
	animate: { opacity: 1 },
}

function Solution({test}) {
	const [ tipsOpenCount, setTipsOpenCount ] = useState(0)
	return (
		<>		
			{
				(tipsOpenCount > 0)
				? (
					<motion.div {...animation} className="w-full">
						<ArticleLayout.Heading color="border-cyan-400 transition ease-in-out">
                            Подсказки
                        </ArticleLayout.Heading>
					</motion.div>
				)
				: (<></>)
			}
			<ol className="w-full list-none">
				{
					test.tips.map((text, i) => {
						if (i < tipsOpenCount) {
							return (
									<motion.li 
									key={i} 
									{...animation}
									className={`w-full text-lg text-start text-slate-900 first-letter:ml-10`}>
										{text}
									</motion.li>
							)
						}
						else {
							return (<></>)
						}
					})
				}
			</ol>
			{
				(tipsOpenCount < test.tips.length)
				? (
					<div className="w-full flex flex-row justify-center">
						<Button 
						variant="dark"
						onClick={() => setTipsOpenCount(() => tipsOpenCount + 1)}>
							Открыть Подсказку
						</Button>
					</div>
				)
				: (<></>)
			}	
		</>
	)
}

export default Solution