import React from 'react';

const CatalogContext = React.createContext({
	testList: [],
	openTest: (id) => { console.error("CatalogContext.openTest(id) was not set! WTF!") },
});

export default CatalogContext;