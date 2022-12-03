import { memo } from 'react';
import { Button as BootstrapButton } from 'react-bootstrap';


function Button(props) {
	return (
		<BootstrapButton {...props}>
			{props.children}
		</BootstrapButton>
	);
}

export default memo(Button);