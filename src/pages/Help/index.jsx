import { Markdown } from 'components/text';
import { MdPreformatted } from 'components/text/markdown';
import { ArticleLayout } from 'components/layouts';


const sampleMarkdown =
`
TODO: Перенести в репозиторий как отдельный Markdown документ.
# Заголовок 1
## Заголовок 2
### Заголовок 3
#### Заголовок 4
##### Заголовок 5

[Ссылка на документацию](https://www.markdownguide.org/cheat-sheet/#basic-syntax)

Обычный текст
без переноса. 
Пустая строка разделяет абзацы.

*Косой шрифт*

**Жирный шрифт**

***Шрифт с обоими стилями***

> Цитата
> без переноса

> Цитата
> 
> с без переносом

Пример \`кода\` внутри абзаца.

\`\`\`
Моногострочный
  отформатированный
блок
\`\`\`

Картинка, выровненная по центру:
![](https://picsum.photos/100)
`;

function Help(props) {
	const setNavOpaqueEvent = "setNavOpaque";

	return (
		<ArticleLayout>
			<ArticleLayout.ReactiveNavTarget event={setNavOpaqueEvent} />
			<ArticleLayout.ReactiveNav variant="transparent-dark" event={setNavOpaqueEvent} showTitle />
			<ArticleLayout.Body>

				<ArticleLayout.Heading color="border-blue-300">
                    Форматирование страницы
                </ArticleLayout.Heading>

                <div className="w-full grid grid-cols-2 gap-4">
                    <div className="">
                        <Markdown preview={false}>{sampleMarkdown}</Markdown>
                    </div>
                    <div>
                        <MdPreformatted>
                            {sampleMarkdown}
                        </MdPreformatted>
                    </div>
                </div>

			</ArticleLayout.Body>
			<ArticleLayout.Footer />
		</ArticleLayout>
	);
}

export default Help;