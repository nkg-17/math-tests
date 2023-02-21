import { useState, useEffect } from 'react';
import { useRandomPic } from 'hooks';


function Picture({test, className, style}) {
	const pic = useRandomPic()

	return (
		<div className={`w-full flex flex-row justify-center ${className}`} style={style}>
			<img 
			src={pic} width="500" />
		</div>
	)
}

export default Picture