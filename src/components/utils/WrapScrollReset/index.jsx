import { useEffect } from 'react';


export default function WrapScrollReset({children}) {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return <>{children}</>;
}
