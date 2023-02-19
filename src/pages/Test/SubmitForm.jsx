import { useContext } from 'react'
import { Link } from 'react-router-dom'

import { InputField } from 'components/forms'
import { Button, LinkButton } from 'components/buttons'

import { TestContext } from 'contexts'

import { RoutePaths } from 'utils/constants'


function SubmitForm({test, className, style}) {
    const context = useContext(TestContext)

	return (
		<div className={`
		w-full py-6 
		flex flex-row align-center justify-between
		 
		${className}`} 
		style={style}>
			<div className="flex flex-row gap-2">
				<LinkButton to={RoutePaths.Catalog} variant="secondary">Вернуться</LinkButton>
                {
                    (!context.solutionOpened) ? (
                        <Button 
                        onClick={context.openSolution}
                        to={RoutePaths.Catalog} 
                        variant="dark">
                            Открыть Решение
                        </Button>
                    ) : (<></>)
                }
				
			</div>

			<div className="flex flex-row gap-2">
				<InputField placeholder="Ответ" />
                {
                    (context.solutionOpened) ? (
                        <LinkButton to={RoutePaths.Catalog} variant="primary">Следующая</LinkButton>
                    ) : (
                        <Button variant="success">Проверить</Button>
                    )
                }
				
			</div>
		</div>
	)
}

export default SubmitForm