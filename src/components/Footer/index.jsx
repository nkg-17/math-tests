

function Footer(props) {
	return (
		<footer className="w-full h-28 text-white bg-gray-800 flex items-center justify-center">
			<div className="flex flex-row items-center">
				<a 
				href="https://github.com/nkg-17/math-tests" 
				target="_blank" 
				className="text-1xl font-normal hover:underline">
					Проект на GitHub
				</a>
				<div className="mx-2 h-full border"></div>
				<a 
				href="" 
				target="_blank" 
				className="text-1xl font-normal hover:underline">
					Сообщить об Ошибке
				</a>
			</div>
		</footer>
	);
}

export default Footer;
