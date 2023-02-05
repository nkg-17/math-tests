import { useState, useEffect } from 'react'

import { subscribe, unsubscribe } from 'helpers/events';

import Layout from 'components/Layout'


function Nav({className, style}) {
	const [ opaque, setOpaque ] = useState(true)

	function setNavOpaqueListener(e) {
		setOpaque(() => e.detail.opaque)
	}

	useEffect(() => {
		subscribe('setNavOpaque', setNavOpaqueListener)
		return () => unsubscribe('setNavOpaque', setNavOpaqueListener)
	}, [])

	return (
		<Layout.Nav opaque={opaque} className={className} style={style} />
	)
}

export default Nav