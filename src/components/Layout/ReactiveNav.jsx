import { useState, useEffect } from 'react'
import { subscribe, unsubscribe } from 'helpers/events'

import Layout from 'components/Layout'


function ReactiveNav({event, showTitle, textColor, className, style}) {
	const [ opaque, setOpaque ] = useState(false)

	function setNavOpaqueListener(e) {
		setOpaque(() => e.detail.opaque)
	}

	useEffect(() => {
		subscribe(event, setNavOpaqueListener)
		return () => unsubscribe(event, setNavOpaqueListener)
	}, [])

	return (
		<Layout.Nav 
		showTitle={opaque ? opaque : showTitle} 
		textColor={textColor} 
		opaque={opaque} 
		className={className} 
		style={style} />
	)
}

export default ReactiveNav