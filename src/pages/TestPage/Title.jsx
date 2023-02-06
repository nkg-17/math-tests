

function Title({color, sideNote, children, className, style}) {
	return (
		<div 
		className={`w-full flex flex-row items-center justify-between ${className}`}
		style={style}>
			<span className="flex flex-row">
				<span className={`w-2 border-l-2 border-${color ? color : "slate-500"} mr-2`} />
				<h2 className="text-start text-2xl text-slate-700 font-light capitalize">
					{children}
				</h2>
			</span>

			<span className="text-1xl text-slate-400 font-light capitalize">
				{sideNote}
			</span>
		</div>
	)
}

export default Title