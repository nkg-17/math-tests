import { Markdown } from 'components/text';
import { MdPreformatted } from 'components/text/markdown';
import { ArticleLayout } from 'components/layouts';


const editing = 
`
На данный момент редактировать задачи прямо на сайте нельзя. 
Зато можно в [архиве](https://github.com/nkg-17/math-tests-archive), если знать как.
`

const formattingIntro =
`
Текст условия и задачи записывается в формате 
[Markdown документа](https://www.markdownguide.org/cheat-sheet/#basic-syntax).

*Внимание:* ***Все*** ссылки на изображения в тексте задачи должны содержать 
**лишь имя изображения**, находящегося в одной папке с файлами задачи (\`tests/1/\`). 
Например ссылка на картинку 
\`tests/1/problem-1.jpg\` должна иметь вид \`![](problem-1.jpg)\`.
`

const sampleMarkdown =
`
# Заголовок 1
## Заголовок 2
### Заголовок 3
#### Заголовок 4
##### Заголовок 5

Обычный текст
без переноса. 
*Пустая строка разделяет абзацы.*

*Косой шрифт*

**Жирный шрифт**

***Шрифт с обоими стилями***

---

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

Обычный список:
- Элемент 1
- Элемент 2

Пронумерованный список:
1) Элемент 1
2) Элемент 2

Формулы и [документация](https://katex.org/docs/supported.html) к ним:

$$
L = \\frac{1}{2} \\rho v^2 S C_L
$$

Картинка, выровненная по центру (в тексте задачи указывать *название файла*, а не ссылку):
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
                    Редактирование задач
                </ArticleLayout.Heading>

                <div className="w-full">
                    <Markdown preview={false}>
                        {editing}
                    </Markdown>
                </div>

				<ArticleLayout.Heading color="border-blue-300">
                    Форматирование страницы
                </ArticleLayout.Heading>

                <div className="w-full mb-12">
                    <Markdown preview={false}>
                        {formattingIntro}
                    </Markdown>
                </div>

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