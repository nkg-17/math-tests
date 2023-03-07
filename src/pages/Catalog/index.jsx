import { useState, useEffect, useRef } from 'react'
import { createRandomTest } from 'types/MathTest';

import Search from './Search';
import Previews from './Previews';
import Header from './Header';

import { Loader } from 'components/utils'

import { CatalogContext } from 'contexts';
import { ArticleLayout } from 'components/layouts';

import wave from 'assets/wave.svg'


function Catalog(props) {
    const [ state, setState ] = useState('loading')
    const tests = useRef(null)

	const contextValue = {
		tests: tests.current,
        setTestListLoaded: (status, data) => {
            if (status == 'failed') {
                console.log('failed:', data)
                setState(() => status)
            }
            else {
                tests.current = data
                setState(() => 'loaded')
            }
        },
		setNavOpaqueEvent: "setNavOpaque"
	};

	const bgHeight = "13rem";
	const bgColorStart = "rgb(59,130,246)";
	const bgColorEnd = "#0099ff";
	const bg = `linear-gradient(to bottom, ${bgColorStart} 0, ${bgColorEnd} ${bgHeight}, transparent ${bgHeight} 100%)`;

	return (
		<ArticleLayout style={{background:bg}}>
			<CatalogContext.Provider value={contextValue}>
				<ArticleLayout.ReactiveNav 
				variant="transparent-light" 
				event={contextValue.setNavOpaqueEvent} />

				<ArticleLayout.Body>
                    <img 
                    className="select-none  pointer-events-none"
                    style={{position:"absolute",top:"12.9rem",width:"100%",zIndex:-1}} 
                    src={wave} />
                    <Header />
                    <Search className="mb-20" />
                    <Previews />
				</ArticleLayout.Body>

				<ArticleLayout.Footer />
			</CatalogContext.Provider>
		</ArticleLayout>
	);
}

export default Catalog;