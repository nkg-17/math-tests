import { faker } from '@faker-js/faker';
import { isEqualType, isNotNull, isStringNullOrEmpty } from 'utils/helpers/fields';
import sample from './sample.json';


export class MathTest {
	id = -1;
    preview = "";
	problem = "";
	solution = "";

	constructor(props) {
		if (!props) 
			return;

		this.id = props.id;
        this.preview = props.preview;
		this.problem = props.problem;
		this.solution = props.solution;
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

	if (!isNotNull(test.id)) 		return createError("'id' is undefined.");

    if (!isEqualType(test.preview, ""))       return createError("'preview' is not a string.");
    if (isStringNullOrEmpty(test.preview))    return createError("'preview' should not be an empty string.");

	if (!isEqualType(test.problem, "")) 		return createError("'problem' is not a string.");
	if (isStringNullOrEmpty(test.problem))	return createError("'problem' should not be an empty string.");

	if (!isEqualType(test.solution, "")) 	return createError("'solution' is not a string.");

	return { ok: true, error: null, test: test };
}

export function createRandomTest() {
    // return { ...sample, id: faker.datatype.number() };
	return new MathTest({
		id: faker.datatype.number(),
        preview: 'https://picsum.photos/300',
		problem: `${faker.lorem.paragraphs(5)}\n\n![](https://picsum.photos/300)`,
		solution: faker.lorem.paragraphs(1),
	});
}
