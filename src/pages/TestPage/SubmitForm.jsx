import { useState } from 'react'
import { Link } from 'react-router-dom'

import InputField from 'components/InputField'

import RoutePaths from 'constants/routePaths'


function SubmitForm({test, className, style}) {
	const [ whatever, setWhatever ] = useState(false)

	return (
		<div className={`
		w-full p-6 
		flex flex-row gap-6 align-center justify-between
		border 
		${className}`} 
		style={style}>
			<div className="flex flex-row gap-2">
				<Link to={RoutePaths.Catalog}>
					<button className="h-full bg-slate-200">Вернуться</button>
				</Link>
				<Link to={RoutePaths.Catalog}>
					<button className="h-full bg-slate-200">Открыть Решение</button>
				</Link>
			</div>

			<div className="flex flex-row gap-2">
				<InputField 
				placeholder="Ответ" 
				border={whatever && "border-rose-500"} />
				<button 
				onClick={() => setWhatever(() => true)} 
				className="bg-emerald-300">
					Проверить
				</button>
			</div>
		</div>
	)
}

export default SubmitForm