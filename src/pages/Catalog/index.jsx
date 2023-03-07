import { useState, useEffect, useRef } from 'react'
import { AnimatePresence } from 'framer-motion'
import { createRandomTest } from 'types/MathTest';

import Search from './Search';
import PreviewList from './PreviewList';
import Header from './Header';

import { Loader } from 'components/utils'

import { CatalogContext } from 'contexts';
import { ArticleLayout } from 'components/layouts';
import { RemoteStorage } from 'services'

import wave from 'assets/wave.svg'


function Catalog(props) {
    const [ state, setState ] = useState('loading')
    const testList = useRef(null)

    useEffect(() => {
        RemoteStorage.getTestList()
            .then((lst) => {
                testList.current = lst
                setState(() => 'loaded')
            })
    }, [])

	const contextValue = {
		testList: testList.current,
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

                    <AnimatePresence>
                    {
                        (state == 'loaded')
                        ? <PreviewList key={1} />
                        : <Loader className="my-auto mx-auto" key={2} />
                    }
                    </AnimatePresence>
				</ArticleLayout.Body>

				<ArticleLayout.Footer />
			</CatalogContext.Provider>
		</ArticleLayout>
	);
}

export default Catalog;