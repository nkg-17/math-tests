// import { Octokit } from "octokit";
import { MathTest } from 'types'


const REPO_NAME = "math-tests"
const REPO_OWNER = "nkg-17"

// const octokit = new Octokit({})

// Returns specified file contents.
function getFile(filepath) {
}

// Returns MathTest instance.
function getTest(id) {
}

// Returns a list of MathTest objects.
function getTestList() {
}


const GitHubStorage = {
    getFile: getFile,
    getTest: getTest,
    getTestList: getTestList,
}

export { GitHubStorage }