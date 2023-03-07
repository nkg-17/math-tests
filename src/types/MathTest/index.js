import { faker } from '@faker-js/faker';
import { isEqualType, isStringNullOrEmpty } from 'utils/helpers/fields';
import sample from './sample.json';


export class MathTest {
	id = -1;
	title = "";
    preview = "";
	problem = { text: "" };
	tips = [];
	solution = { text: "" };
	answer = "";

	constructor(props) {
		if (!props) 
			return;

		this.id = props.id;
		this.title = props.title;
        this.preview = props.preview;
		this.problem.text = props.problem.text;
		this.tips = props.tips;
		this.solution.text = props.solution.text;
		this.answer = props.answer;
	}
}

export function verifyTest(test) {
	function createError(msg) {
		return {
			ok: false,
			message: msg,
			test: test
		};
	}

	if (!isEqualType(test.id, 0)) 		return createError("'id' is not a number.");
	if (test.id < 0) 	return createError("'id' is less than zero. ID should only be a positive integer (-1 is for invalid ID).");

	if (!isEqualType(test.title, "")) 		return createError("'title' is not a string.");
	if (stringIsNullOrEmpty(test.title))	return createError("'title' should not be an empty string.");
	
    if (!isEqualType(test.preview, ""))       return createError("'preview' is not a string.");
    if (stringIsNullOrEmpty(test.title))    return createError("'preview' should not be an empty string.");

	if (!isEqualType(test.answer, "")) 		return createError("'answer' is not a string.");
	if (stringIsNullOrEmpty(test.answer))	return createError("'answer' should not be an empty string.");
	
	if (!isEqualType(test.problem?.text, "")) 		return createError("'problem.text' is not a string.");
	if (stringIsNullOrEmpty(test.problem?.text))	return createError("'problem.text' should not be an empty string.");

	if (!isEqualType(test.solution?.text, "")) 	return createError("'solution.text' is not a string.");

	return { ok: true, error: null, test: test };
}

export function createRandomTest() {
    // return { ...sample, id: faker.datatype.number() };
	return new MathTest({
		id: faker.datatype.number(),
		title: faker.lorem.words(),
        preview: 'https://picsum.photos/300',
		problem: { text: `${faker.lorem.paragraphs(5)}\n\n![](https://picsum.photos/300)` },
		tips: Array.from(Array(3), (n) => faker.lorem.paragraphs(1)),
		solution: { text: faker.lorem.paragraphs(1) },
		answer: faker.lorem.word()
	});
}
