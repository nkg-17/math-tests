

export function isEqualType(a, b) {
	return typeof(a) === typeof(b);
}

export function isNotNull(a) {
	return a !== undefined && a !== null;
}

export function isStringNullOrEmpty(s) {
    return s === null || s.match(/^ *$/) !== null;
}

export function unwrapError(e) {
    let lst = []
    while (e) {
        lst.push(e)
        e = e.cause
    }
    return lst
}
