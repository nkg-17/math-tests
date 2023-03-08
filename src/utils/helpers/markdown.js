

export function replaceTestImageURLs(id) {
    return (src) => `https://raw.githubusercontent.com/nkg-17/math-tests-archive/main/tests/${id}/${src}`
}
