import { Link } from 'react-router-dom'
import Button from 'components/buttons/Button'


function LinkButton({children, to, variant, className, style}) {
	return (
		<Link to={to} className={`m-0 p-0 ${className}`} style={style}>
			<Button variant={variant}>{children}</Button>
		</Link>
	)
}

export default LinkButton