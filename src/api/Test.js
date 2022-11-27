import { isEqualType } from '../util/ValidateUtils';


export default class Test {
	static INVLALID_ID = -1;

	id = 0;
	title = "";
	problem = { text: "" };
	solution = { text: "" };
	answer = "";

	constructor() {
		this.id = Test.INVLALID_ID;
	}

	verify() {
		if (!isEqualType(this.id, 0)) 		return { ok: false, error: "'id' is not a number"};
		if (!isEqualType(this.title, "")) 	return { ok: false, error: "'title' is not a string"};
		if (!isEqualType(this.answer, "")) 	return { ok: false, error: "'answer' is not a string"};
		if (!isEqualType(this.problem?.text, "")) 	return { ok: false, error: "'problem.text' is not a string"};
		if (!isEqualType(this.solution?.text, "")) 	return { ok: false, error: "'solution.text' is not a string"};
		return { ok: true, error: null };
	}
}
