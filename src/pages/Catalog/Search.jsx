import { useContext } from 'react'
import { InputField } from 'components/forms'
import { CatalogContext } from 'contexts'
import { publish } from 'utils/helpers/events'


function Search({className, style}) {
    const context = useContext(CatalogContext)

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
			<InputField 
            placeholder="Поиск" 
            onChange={(t) => publish(context.searchEvent, t)} />
		</div>
	);
}

export default Search