import { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ScrollToTop } from 'components/utils';


function AppRouter(props) {
    return (
            <Router basename={import.meta.env.BASE_URL}>
                <ScrollToTop />
                {props.children}
            </Router>
    );
}

export default AppRouter;