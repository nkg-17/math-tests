import { Markdown } from 'components/text';

import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import './TestPreview.css';


function TestPreview({test, ...props}) {
	const preview = (test.preview)
        ? <img src={test.preview} className="w-full" />
        : <i className="bi bi-file-earmark-image text-slate-400 text-2xl" />;

	return (
		<Link to={`/test/${test.id}`} className="text-reset text-decoration-none">
			<div 
			className={`
			w-full p-6 
			flex flex-row gap-6 
			hover:bg-slate-100 
			active:bg-slate-200 
			transition
			ease-in-out 
			cursor-pointer ${props.className}`}>
				<div 
				className={`
				w-52 h-52 
				flex-none
				border
                flex items-center justify-center
                overflow-hidden`}>
                    {preview}
				</div>
				
				<div className="flex flex-col gap-2 justify-center overflow-hidden select-none pointer-events-none">
					<div 
					className="w-fit flex flex-col gap-2 font-normal capitalize text-slate-700 text-2xl truncate">
						{test.title}
						<span className="w-16 border-t-2 border-sky-300"></span>
					</div>
					<div className="TestPreviewText">
                        <Markdown preview baseColor="text-slate-600" baseFont="text-base">
                            {test.problem.text}
                        </Markdown>
					</div>
					<span className="font-light text-slate-500">Добавлено 2 Февраля 21:22</span>
				</div>
			</div>
		</Link>
	);
}

export default TestPreview;