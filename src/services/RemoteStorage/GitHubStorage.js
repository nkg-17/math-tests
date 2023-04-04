import { MathTest, verifyTest } from 'types/MathTest'


const REPO_NAME = "math-tests-archive"
const REPO_OWNER = "nkg-17"


function getPath(path) {
    return fetch(`https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/contents/${path}`)
        .then((r) => r.json())
        .then((d) => { if (Math.random() >= 0.5) throw new Error("Bingo!", {cause: Error("inner")}); return d; })
        .catch((e) => {
            throw new Error(
                `Не удалось выполнить запрос к GitHub API: "${path}" (${e.message})`,
                {cause: e}
            )
        })
}

function getFile(path) {
    return getPath(path)
        .then((resp) => fetch(resp.download_url))
        .then((data) => data.text())
        .catch((e) => {
            throw new Error(
                `Не удалось загрузить файл "${path}"`,
                {cause: e}
            )
        })
}

function getFileList(path) {
    return getPath(path)
        .then((resp) => resp.map((e) => e.name))
        .catch((e) => {
            throw new Error(
                `Не удалось получить список файлов по пути "${path}"`,
                {cause: e}
            )
        })
}

function getFileURL(path) {
    return getPath(path)
        .then((resp) => resp.download_url)
        .catch((e) => {
            throw new Error(
                `Не удалось получить ссылку на файл "${path}"`,
                {cause: e}
            )
        })
}

function getTestFile(id, filename) {
    return getFile(`tests/${id}/${filename}`)
        .catch((e) => {
            throw new Error(
                `Не удалось загрузить файл "${filename}" теста "${id}"`,
                {cause: e}
            )
        })
}

function getTestFileURL(id, filename) {
    return getFileURL(`tests/${id}/${filename}`)
        .catch((e) => {
            throw new Error(
                `Не удалось получить ссылку на файл "${filename}" теста "${id}"`,
                {cause: e}
            )
        })
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
            throw new Error(
                `Не удалось загрузить тест "${id}"`,
                {cause: e}
            ) 
        
        return test
    })
    .catch((e) => {
        throw new Error(
            `Не удалось загрузить тест "${id}"`,
            {cause: e}
        )
    })
}

function getTestIDList() {
    function sortDirNames(a, b) {
        let ai = parseInt(a);
        let bi = parseInt(b);
        if (ai < bi) return -1;
        if (ai > bi) return 1;
        return 0;
    }

    return getFileList(`tests`)
        .then((ids) => ids.sort(sortDirNames))
        .catch((e) => {
            throw new Error(
                `Не удалось получить список тестов`,
                {cause: e}
            )
        })
}


const GitHubStorage = {
    getFile: getFile,
    getTest: getTest,
    getTestIDList: getTestIDList,
}

export { GitHubStorage }
