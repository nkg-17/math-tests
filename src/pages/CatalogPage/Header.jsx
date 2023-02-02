

function Header(props) {
	return (
		<header className={"pb-16 pt-0 flex flex-col items-center gap-3 " + props.className}>
			<h1 className="w-fit text-5xl font-light text-white">
				Стереометрия ЕГЭ
			</h1>
			<h2 className="w-fit text-xl font-light text-slate-200">
				Каталог задач для подготовки к экзамену
			</h2>
		</header>
	);
}

export default Header;