import { useContext } from 'react'
import { Link } from 'react-router-dom'

import { InputField } from 'components/forms'
import { Button, LinkButton } from 'components/buttons'

import { TestContext } from 'contexts'

import { RoutePaths } from 'utils/constants'


function SubmitForm({test, className, style}) {
    const context = useContext(TestContext)

    const inputFieldAndSubmitButton = (
        <>
            <InputField placeholder="Ответ" />
            {
                (context.solutionOpened) ? (
                    <LinkButton to={RoutePaths.Catalog} variant="primary">
                        Следующая
                    </LinkButton>
                ) : (
                    <Button variant="success">Проверить</Button>
                )
            }
        </>
    )

    const openSolutionButton = (
        <>
            {
                (!context.solutionOpened) ? (
                    <Button 
                    onClick={context.openSolution}
                    to={RoutePaths.Catalog} 
                    variant="success">
                        Открыть Решение
                    </Button>
                ) : (<></>)
            }
        </>
    )

	return (
		<div className={`w-full py-6 columns-3 ${className}`} 
		style={style}>
			<div className="">
				<LinkButton to={RoutePaths.Catalog} variant="secondary">
                    Вернуться
                </LinkButton>
			</div>

			<div className="flex flex-row justify-center">
				{openSolutionButton}
			</div>
		</div>
	)
}

export default SubmitForm