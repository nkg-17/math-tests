import React from 'react';

const CatalogContext = React.createContext({
	openTest: (id) => { console.error("CatalogContext.openTest(id) was not set!") },
});

export default CatalogContext;