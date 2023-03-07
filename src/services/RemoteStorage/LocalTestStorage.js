import { MathTest } from 'types'
import SampleData from './samples.json'


const IDs = (function() {
    let ids = []
    for (let i in SampleData['tests'])
        ids.push(i)
    return ids
})()

const Tests = (function() {
    let tests = []
    for (let i in SampleData['tests'])
        tests.push(SampleData['tests'][i])
    return tests
})()


function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, (Math.random() % 2 + 0.5) * 500))
}

function getFile(docName) {
    return new Promise(async (resolve, reject) => {
        await delay()
        if (!SampleData['files'][docName])
            reject(`Файла с именем '${docName}' не существует.`)
        resolve(SampleData['files'][docName])
    })
}

function getTest(id) {
    return new Promise(async (resolve, reject) => {
        await delay()
        if (!SampleData['tests'][id])
            reject(`Задания с номером '${id}' не существует.`)
        resolve(SampleData['tests'][id])
    })
}

function getTestIDList() {
    return new Promise(async (resolve, reject) => {
        await delay()
        if (!IDs)
            reject(`Задания не найдены.`)
        resolve(IDs)
    })
}


const LocalTestStorage = {
    getFile: getFile,
    getTest: getTest,
    getTestIDList: getTestIDList,
}

export { LocalTestStorage }