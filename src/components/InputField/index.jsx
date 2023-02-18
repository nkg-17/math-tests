

function InputField({border, borderFocus, placeholder, onChange, className, style}) {
	borderFocus = (borderFocus) ? borderFocus : "focus:border-blue-600"
	borderFocus = (border) ? border : borderFocus
	border = border ? border : "border-gray-300"

	return (
		<div className={`w-full ${className}`} style={style}>
			<input
			type="search"
			className={`
			form-control
			block
			w-full
			px-3
			py-1.5
			text-base
			font-normal
			text-gray-700
			bg-white bg-clip-padding
			border border-solid ${border}
			rounded-lg
			transition
			ease-in-out
			m-0
			focus:shadow-inner
			focus:text-gray-700 focus:bg-white ${borderFocus} focus:outline-none
			`}
			onChange={onChange}
			placeholder={placeholder}
			/>
		</div>
	)
}

export default InputField