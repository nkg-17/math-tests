import { useState, useMemo, useEffect } from 'react';

import Test from '../api/Test';


function DebugPage(props) {
	const [ test, setTest ] = useState(() => new Test());
	const verification = useMemo(() => test.verify(), [test]);

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