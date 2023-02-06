

function FullscreenBody({children, className, style}) {
	return (
		<main 
		className={`flex-auto w-screen ${className}`} 
		style={style}>
			{children}
		</main>
	)
}

export default FullscreenBody