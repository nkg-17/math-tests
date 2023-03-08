import { MathTest, verifyTest } from 'types/MathTest'


const REPO_NAME = "math-tests-archive"
const REPO_OWNER = "nkg-17"


function getPath(path) {
    return fetch(`https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/contents/${path}`)
        .then((r) => r.json())
}

function getFile(path) {
    return new Promise(async (resolve, reject) => {
        return getPath(path)
            .then((resp) => fetch(resp.download_url))
            .then((data) => data.text())
            .then((out) => resolve(out))
            .catch((e) => reject(`Файл '${path}' не найден. Ошибка: ${e}`))
    })
}

function getFileList(path) {
    return new Promise(async (resolve, reject) => {
        return getPath(path)
            .then((resp) => resp.map((e) => e.name))
            .then((out) => resolve(out))
            .catch((e) => reject(`${e}`))
    })
}

function getFileURL(path) {
    return new Promise(async (resolve, reject) => {
        return getPath(path)
            .then((resp) => resp.download_url)
            .then((url) => resolve(url))
            .catch((e) => reject(`Файл '${path}' не найден. Ошибка: ${e}`))
    })
}

function getTestFile(id, filename) {
    return getFile(`tests/${id}/${filename}`)
}

function getTestFileURL(id, filename) {
    return getFileURL(`tests/${id}/${filename}`)
}

function getTest(id) {
    return Promise.all([
        getTestFile(id, 'problem.md'),
        getTestFile(id, 'solution.md'),
        getTestFileURL(id, 'preview.svg')
    ])
    .then(([problem, solution, previewUrl]) => {
        let test = new MathTest({
            id: id,
            preview: previewUrl,
            problem: problem,
            solution: solution
        })
        const err = verifyTest(test)
        if (!err.ok)
            throw new Error(err.message) 
        
        return test
    })

    // return new Promise(async (resolve, reject) => {
    //     let problem = await getTestFile(id, 'problem.md').catch((e) => reject(e))
    //     let solution = await getTestFile(id, 'solution.md').catch((e) => reject(e))
    //     const previewUrl = await getTestFileURL(id, 'preview.svg').catch((e) => reject(e))

    //     if (!problem || !solution || !previewUrl)
    //         return

    //     let test = new MathTest({
    //         id: id,
    //         preview: previewUrl,
    //         problem: problem,
    //         solution: solution
    //     })

    //     const err = verifyTest(test)
    //     if (!err.ok)
    //         reject(`Test '${id}' is invalid: ${err.message}`) 

    //     resolve(test)
    // })
}

function getTestIDList() {
    function sortDirNames(a, b) {
        let ai = parseInt(a);
        let bi = parseInt(b);
        if (ai < bi) return -1;
        if (ai > bi) return 1;
        return 0;
    }

    return new Promise(async (resolve, reject) => {
        return getFileList(`tests`)
            .then((ids) => ids.sort(sortDirNames))
            .then((ids) => resolve(ids))
            .catch((e) => reject(`Файл '${path}' не найден. Ошибка: ${e}`))
    })
}


const GitHubStorage = {
    getFile: getFile,
    getTest: getTest,
    getTestIDList: getTestIDList,
}

export { GitHubStorage }
