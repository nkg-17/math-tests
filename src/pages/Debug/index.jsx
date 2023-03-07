import { ArticleLayout } from 'components/layouts';
import { Loader } from 'components/utils'


function Debug(props) {
    const setNavOpaqueEvent = "setNavOpaque";

    return (
        <ArticleLayout>
            <ArticleLayout.ReactiveNavTarget event={setNavOpaqueEvent} />
            <ArticleLayout.ReactiveNav variant="transparent-dark" event={setNavOpaqueEvent} showTitle />
            <ArticleLayout.Body>

                <Loader size={30} color="text-sky-500" thickness={3} progress={0.99999} />
                <Loader color="text-gray-500" progress={1} />

            </ArticleLayout.Body>
            <ArticleLayout.Footer />
        </ArticleLayout>
    );
}

export default Debug;
