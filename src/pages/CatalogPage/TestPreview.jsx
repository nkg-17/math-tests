import { useState, useEffect } from 'react';
import useAnimePic from 'hooks/useAnimePic';

import { Link } from 'react-router-dom';

import './TestPreview.css';


function TestPreview(props) {
	const pic = useAnimePic();

	const style = (pic) ? {backgroundImage:`url(${pic})`} : {};

	return (
		<Link to={`/test/${props.test.id}`} className="text-reset text-decoration-none">
			<div 
			className={`
			w-full p-6 
			flex flex-row gap-6 
			hover:bg-slate-200 
			active:bg-slate-300 
			transition
			ease-in-out 
			cursor-pointer ${props.className}`}>
				<div 
				className="
				w-52 h-52 
				flex-none
				border 
				bg-cover bg-center bg-no-repeat"
				style={style}>
				</div>
				
				<div className="flex flex-col gap-2 justify-center overflow-hidden select-none pointer-events-none">
					<div 
					className="w-fit flex flex-col gap-2 font-normal capitalize text-slate-700 text-2xl truncate">
						{props.test.title}
						<span className="w-16 border-t-2 border-sky-300"></span>
					</div>
					<div className="TestPreviewText text-slate-600 text-base">
						{props.test.problem.text}
					</div>
					<span className="font-light text-slate-500">Добавлено 2 Февраля 21:22</span>
				</div>
			</div>
		</Link>
	);
}

export default TestPreview;