

function ArticleBody({children, className, style}) {
	return (
		<main 
		className={"w-2/3 mb-20 mt-6 flex-1 flex flex-col items-center " + className} 
		style={style}>
			{children}
		</main>
	)
}

export default ArticleBody