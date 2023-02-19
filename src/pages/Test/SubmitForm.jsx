import { Link } from 'react-router-dom'

import { InputField } from 'components/forms'
import { Button, LinkButton } from 'components/buttons'

import { RoutePaths } from 'utils/constants'


function SubmitForm({test, className, style}) {
	return (
		<div className={`
		w-full py-6 
		flex flex-row align-center justify-between
		 
		${className}`} 
		style={style}>
			<div className="flex flex-row gap-2">
				<LinkButton to={RoutePaths.Catalog} variant="secondary">Вернуться</LinkButton>
				<LinkButton to={RoutePaths.Catalog} variant="dark">Открыть Решение</LinkButton>
			</div>

			<div className="flex flex-row gap-2">
				<InputField placeholder="Ответ" />
				<Button variant="success">Проверить</Button>
			</div>
		</div>
	)
}

export default SubmitForm