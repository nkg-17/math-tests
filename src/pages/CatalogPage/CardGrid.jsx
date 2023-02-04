import { useContext } from 'react';

import TestPreview from './TestPreview';

import CatalogContext from 'contexts/CatalogContext';


function CardGrid(props) {
	const context = useContext(CatalogContext);

	return (
		<div className="w-full grid grid-cols-1 divide-y divide-slate-300/100">
			{ context.testList.map((test) => <TestPreview key={test.id} test={test} />) }
		</div>
	);
}

export default CardGrid;