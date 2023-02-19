import { InputField } from 'components/forms'


function Search({className, style}) {
	return (
		<div 
		className={`
		w-3/4 px-10 py-8 
		flex flex-col gap-1 
		bg-white 
		shadow-lg shadow-black/20 
		border rounded-lg ${className}`}
		style={style}>
			<span className="text-slate-700 select-none">Поиск по загаловку задачи</span>
			<InputField placeholder="Поиск" />
		</div>
	);
}

export default Search