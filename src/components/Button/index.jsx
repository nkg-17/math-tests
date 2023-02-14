

const buttonVariants = {
	"light": {
		text: "text-white",
		textHover: "hover:text-slate-900",
		bg: "bg-transparent",
		bgHover: "hover:bg-slate-200",
		bgActive: "active:bg-slate-300"
	},
	"dark": {
		text: "text-slate-900",
		textHover: "hover:text-slate-900",
		bg: "bg-transparent",
		bgHover: "hover:bg-slate-200",
		bgActive: "active:bg-slate-300"
	}
}

function Button({children, onClick, variant, className, style}) {
	variant = (buttonVariants[variant]) ? buttonVariants[variant] : buttonVariants["light"]

	return (
		<button 
		onClick={onClick}
		className={`
		m-0 px-3 py-1.5 
		cursor-pointer select-none 
		rounded-lg 
		transition 
		ease-in-out 
		${variant.text} ${variant.textHover} 
		${variant.bg} ${variant.bgHover} ${variant.bgActive} 
		shadow-black/50 hover:shadow-md
		${className} `}
		style={style}>
			{children}
		</button>
	)
}

export default Button