//this will be used to keep the json file fresh for whenever it is used
//borrowed from Josh Naylor
const { readFileSync } = require('fs')
const readAndParseFile = filePath => {
    const content = readFileSync(filePath, 'utf-8')
    return JSON.parse(content)
}

module.exports = readAndParseFile