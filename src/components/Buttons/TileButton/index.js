import './index.css';

import { memo } from 'react';


function TileButton(props) {
	return (
		<div className="btn btn-lg btn-light rounded-0">
			{props.children}
		</div>
	);
}

export default memo(TileButton);