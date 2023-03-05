import { MathTest } from 'types'
import SampleData from './samples.json'


const IDs = (function() {
    let ids = []
    for (let i in SampleData['tests'])
        ids.push(i)
    return ids
})()


function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, 1000))
}

function getFile(docName) {
    return new Promise(async (resolve, reject) => {
        await delay()
        if (!SampleData['files'][docName])
            reject(`No such file as '${docName}'`)
        resolve(SampleData['files'][docName])
    })
}

function getTest(id) {
    id = IDs[Math.floor(Math.random() * IDs.length)]
    return new Promise(async (resolve, reject) => {
        await delay()
        if (!SampleData['tests'][id])
            reject(`No such test with '${id}'`)
        resolve(SampleData['tests'][id])
    })
}

function getTestList() {
    return new Promise(async (resolve, reject) => {
        await delay()
        if (!SampleData['files'])
            reject(`Tests are not available`)
        resolve(SampleData['files'])
    })
}


const LocalTestStorage = {
    getFile: getFile,
    getTest: getTest,
    getTestList: getTestList,
}

export { LocalTestStorage }