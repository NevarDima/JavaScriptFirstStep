const fs = require('fs')
const path = require('path')
const fsPromise = require('fs/promises')

const writeFileAsync = async (somePath, someText) => {
    return new Promise((resolve, reject) => fs.writeFile(somePath, someText, (err) =>{
        if(err){
            console.log('Cant write to file')
            return reject(err.message)
        }
        resolve()
    }))
}

const readFileAsync = async (somePath) => {
    return new Promise((resolve, reject) => fs.readFile(somePath, {encoding: 'utf-8'}, (err, data) =>{
        if(err){
            console.log('Cant read to file')
            return reject(err.message)
        }
        resolve(data)
    }))
}

const removeFileAsync = async (somePath) => {
    return new Promise((resolve, reject) => fs.rm(somePath, (err) =>{
        if(err){
            console.log('Cant remove to file')
            return reject(err.message)
        }
        resolve()
    }))
}

const text = process.env.TEXT || ''

writeFileAsync(path.resolve(__dirname, 'fs-task.txt'), text)
    .then(() => readFileAsync(path.resolve(__dirname, 'fs-task.txt')))
    .then(data => data.split(' ').length)
    .then(count => writeFileAsync(path.resolve(__dirname, 'count.txt'), `The count of words is : ${count}`))
    .then(() => removeFileAsync(path.resolve(__dirname, 'fs-task.txt')))
    // .then(() => removeFileAsync(path.resolve(__dirname, 'count.txt')))
    .catch(err => console.log(err.message))

