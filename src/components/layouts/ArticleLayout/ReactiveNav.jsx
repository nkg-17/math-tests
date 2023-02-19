import { useState, useEffect } from 'react'
import { subscribe, unsubscribe } from 'utils/helpers/events'

import Nav from './Nav'


function ReactiveNav({event, showTitle, variant, className, style}) {
	const [ opaque, setOpaque ] = useState(false)

	function setNavOpaqueListener(e) {
		setOpaque(() => e.detail.opaque)
	}

	useEffect(() => {
		subscribe(event, setNavOpaqueListener)
		return () => unsubscribe(event, setNavOpaqueListener)
	}, [])

	return (
		<Nav 
		showTitle={opaque ? opaque : showTitle} 
		variant={opaque ? "opaque" : variant} 
		className={className} 
		style={style} />
	)
}

export default ReactiveNav