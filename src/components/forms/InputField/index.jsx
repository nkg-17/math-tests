import { useRef } from 'react'


function InputField({
        border, 
        borderFocus, 
        placeholder, 
        autoFocus,
        onChange, 
        onSelect,
        onSubmit,
        className, 
        style}) {

    const inputRef = useRef(null)

    function handleSubmit(e) {
        e.preventDefault()
        if (onSubmit)
            onSubmit(inputRef.current.value)
    }

    function handleChange(e) {
        if (onChange)
            onChange(inputRef.current.value)
    }

	borderFocus = (borderFocus) ? borderFocus : "focus:border-blue-600"
	borderFocus = (border) ? border : borderFocus
	border = border ? border : "border-gray-300"

	return (
		<form onSubmit={handleSubmit} className={`w-full ${className}`} style={style}>
			<input
            ref={inputRef}
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
			onChange={handleChange}
            onSelect={onSelect}
			placeholder={placeholder}
            autoFocus={autoFocus}
			/>
		</form>
	)
}

export default InputField