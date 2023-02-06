import { useState, useEffect, useContext } from 'react'
import { subscribe, unsubscribe } from 'helpers/events'

import Layout from 'components/Layout'

import CatalogContext from 'contexts/CatalogContext'


function Nav({className, style}) {
	const [ opaque, setOpaque ] = useState(false)
	const context = useContext(CatalogContext)

	function setNavOpaqueListener(e) {
		setOpaque(() => e.detail.opaque)
	}

	useEffect(() => {
		subscribe(context.setNavOpaqueEvent, setNavOpaqueListener)
		return () => unsubscribe(context.setNavOpaqueEvent, setNavOpaqueListener)
	}, [])

	return (
		<Layout.Nav showTitle={opaque} opaque={opaque} className={className} style={style} />
	)
}

export default Nav