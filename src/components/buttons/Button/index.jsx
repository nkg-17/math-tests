

const buttonVariants = {
	"light": 
		`
		text-white bg-transparent
		hover:text-slate-900 hover:bg-slate-200
		active:bg-slate-300
		`,
	"dark": 
		`
		text-slate-900 bg-transparent
		hover:text-slate-900 hover:bg-slate-200
		active:bg-slate-300
		`,
	"success": 
		`
		text-white bg-emerald-600
		hover:text-white hover:bg-emerald-500
		active:bg-emerald-600
		`,
	"primary": 
		`
		text-white bg-blue-600
		hover:text-white hover:bg-blue-500
		active:bg-blue-600
		`,
	"secondary": 
		`
		text-slate-900 bg-slate-300
		hover:text-slate-900 hover:bg-slate-200
		active:bg-slate-300
		`,
}

function Button({children, onClick, variant, className, style}) {
	const classes = (buttonVariants[variant]) ? buttonVariants[variant] : buttonVariants["light"]

	return (
		<button 
		onClick={onClick}
		className={`
		m-0 px-3 py-1.5 
		cursor-pointer select-none 
		rounded-lg 
		transition 
		ease-in-out 
		${classes}
		hover:shadow-slate-500/10 hover:shadow-md
		${className} `}
		style={style}>
			{children}
		</button>
	)
}

export default Button