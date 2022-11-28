import { isEqualType, stringIsNullOrEmpty } from '../helpers/validateFields';


export class Test {
	static INVLALID_ID = -1;

	id = 0;
	title = "";
	problem = { text: "" };
	solution = { text: "" };
	answer = "";

	constructor() {
		this.id = Test.INVLALID_ID;
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
	if (test.id < Test.INVLALID_ID) 	return createError("'id' is less than zero. ID should only be a positive integer (-1 is for invalid ID).");

	if (!isEqualType(test.title, "")) 		return createError("'title' is not a string.");
	if (stringIsNullOrEmpty(test.title))	return createError("'title' should not be an empty string.");
	
	if (!isEqualType(test.answer, "")) 		return createError("'answer' is not a string.");
	if (stringIsNullOrEmpty(test.answer))	return createError("'answer' should not be an empty string.");
	
	if (!isEqualType(test.problem?.text, "")) 		return createError("'problem.text' is not a string.");
	if (stringIsNullOrEmpty(test.problem?.text))	return createError("'problem.text' should not be an empty string.");

	if (!isEqualType(test.solution?.text, "")) 	return createError("'solution.text' is not a string.");

	return { ok: true, error: null, test: test };
}
