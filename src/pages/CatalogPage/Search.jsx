

function Search(props) {
	return (
		<div className={"w-3/4 px-10 py-8 bg-white shadow-lg shadow-slate-100 border rounded-lg " + props.className}>
			<label 
			htmlFor="search" 
			className="form-label inline-block mb-2 select-none text-gray-700">
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
			focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
			"
			id="search"
			placeholder="Type query"
			/>
		</div>
	);
}

export default Search;