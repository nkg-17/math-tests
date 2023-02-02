import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import './TestPreview.css';


function TestPreview(props) {
	const [ pic, setPic ] = useState(null);
	
	useEffect(() => {
		let controller = new AbortController();
		const signal = controller.signal;

		fetch("https://api.waifu.pics/sfw/waifu", { signal })
			.then((r) => r.json())
			.then((j) => setPic(j['url']))
			.catch((e) => {})
		
		return () => { if (controller) controller.abort(); };
	}, [])

	const style = (pic) ? {backgroundImage:`url(${pic})`} : {};

	return (
		<Link to={`/test/${props.test.id}`} className="text-reset text-decoration-none">
			<div 
			className="
			w-full p-6 
			flex flex-row gap-6 
			hover:bg-slate-100 
			transition
			ease-in-out 
			cursor-pointer">
				<div 
				className="
				w-52 h-52 
				flex-none
				border 
				bg-cover bg-center bg-no-repeat"
				style={style}>
				</div>
				
				<div className="flex flex-col gap-2 justify-center overflow-hidden">
					<span 
					className="font-normal capitalize text-slate-700 text-2xl truncate">
						{props.test.title}
					</span>
					<div className="TestPreviewText text-slate-600 text-lg">
						{props.test.problem.text}
					</div>
					<span className="font-light text-slate-500">Добавлено 2 Февраля 21:22</span>
				</div>
			</div>
		</Link>
	);
}

export default TestPreview;