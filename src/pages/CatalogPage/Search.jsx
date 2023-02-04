

function Search(props) {
	return (
		<div 
		className={"w-3/4 px-10 py-8 grid grid-cols-1 gap-3 bg-white shadow-lg shadow-black/20 border rounded-lg " + props.className}>
			<div className="w-full">
				<label 
				htmlFor="search" 
				className="form-label mb-1 inline-block select-none text-gray-700">
					Поиск по тексту задачи
				</label>
				<input
				type="search"
				className="
				form-control
				block
				w-full
				px-3
				py-1.5
				text-base
				font-normal
				text-gray-700
				bg-white bg-clip-padding
				border border-solid border-gray-300
				rounded
				transition
				ease-in-out
				m-0
				focus:shadow-inner
				focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
				"
				id="search"
				placeholder="Type query"
				/>
			</div>
			
			{/*
			<div className="w-full flex flex-row gap-1">
				<button 
				className="
				px-2
				py-1 
				text-xs font-normal text-black
				rounded-full 
				bg-slate-200
				focus:bg-cyan-400">
					Прямоугольники
				</button>
				<button 
				className="
				px-2
				py-1 
				text-xs font-normal text-black
				rounded-full 
				bg-slate-200
				focus:bg-cyan-400">
					Конусы
				</button>
				<button 
				className="
				px-2
				py-1 
				text-xs font-normal text-black
				rounded-full 
				bg-slate-200
				focus:bg-cyan-400">
					Цилиндры
				</button>
			</div>

			<div className="w-full flex flex-row gap-2 justify-start">
				<button className="text-sm text-slate-500 hover:text-slate-600">Выбрать все</button>
				<button className="text-sm text-slate-500 hover:text-slate-600">Очистить</button>
			</div>
			*/}
		</div>
	);
}

export default Search;