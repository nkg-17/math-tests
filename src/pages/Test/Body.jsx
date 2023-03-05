import { ArticleLayout } from 'components/layouts';
import Problem from './Problem'
import Solution from './Solution'


export default function Body({test}) {
    return (
        <>
            <ArticleLayout.Heading 
            color="border-blue-300" 
            sideNote="Добавлено 6 Февраля 14:49">
                {test.title}
            </ArticleLayout.Heading>
            <Problem test={test} />
            <Solution test={test} />
        </>
    )
}
