import { useState, useMemo, useEffect } from 'react';

import { Test, verifyTest } from '../types/Test';


function DebugPage(props) {
	const [ test, setTest ] = useState(() => new Test());
	const verification = useMemo(() => verifyTest(test), [test]);

	useEffect(() => {
		setTest(new Test());
		return () => {};
	}, []);

	return (
		<div>
			<pre 
			style={{ textAlign: "left" }}>
				{JSON.stringify(test, null, 4)}
			</pre>
			<pre 
			style={{ textAlign: "left" }}>
				{JSON.stringify(verification, null, 4)}
			</pre>
		</div>
	);
}

export default DebugPage;