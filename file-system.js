const fs = require('fs')
const path = require('path')
const rimraf = require('rimraf')
const fsPromise = require('fs/promises')

//-------

fs.mkdirSync(path.resolve(__dirname, 'dir'))
console.log('Dir was created')
fs.rmdirSync(path.resolve(__dirname, 'dir'))
console.log('Dir was deleted')

//-------

fs.mkdirSync(path.resolve(__dirname, 'dir1', 'dir2', 'dir3'), {recursive: true})
console.log('dir1/dir2/dir3 was created recursively')
rimraf.sync(path.resolve(__dirname, 'dir1'))
console.log('dir1 with subfolders was deleted')

//-------

console.log('START')
fs.mkdir(path.resolve(__dirname, 'dir4', 'dir5', 'dir6'), {recursive: true}, (err) => {
    if(err){
        console.log(err)
        return
    }
    console.log('Dirs were created')
})
console.log('END')

fs.writeFile(path.resolve(__dirname, 'dir4', 'dir5', 'dir6', 'file.txt'), 'some data in file', (err) => {
    if(err){
        console.log('Cant write to file')
    }else{
        console.log('File was written')
    }
})

fs.appendFile(path.resolve(__dirname, 'dir4', 'dir5', 'dir6', 'file.txt'), '!!!! another some data in file', (err) => {
    if(err){
        console.log('Cant write to file')
    }else{
        console.log('File was written')
    }
})

rimraf.sync(path.resolve(__dirname, 'dir4'))
console.log('dir4 with subfolders and files was deleted')

//-------

const writeFileAsync = async (somePath, data) => {
    return new Promise((resolve, reject) => fs.writeFile(path.resolve(somePath), data,  (err) => {
        if(err){
            console.log('Cant write to file')
            return reject(err.message)
        }
        resolve()
    }))
}

const appendFileAsync = async (somePath, data) => {
    return new Promise((resolve, reject) => fs.appendFile(path.resolve(somePath), data, (err) => {
        if(err){
            console.log('Cant append to file')
            return reject(err.message)
        }
        resolve()
    }))
}
const readFileAsync = async (somePath) => {
    return new Promise((resolve, reject) => fs.readFile(path.resolve(somePath), {encoding: 'utf-8'}, (err, data) => {
        if(err){
            console.log('Cant append to file')
            return reject(err.message)
        }
        resolve(data)
    }))
}

const removeFileAsync = async (somePath) => {
    return new Promise((resolve, reject) => fs.rm(path.resolve(somePath), (err) => {
        if(err){
            console.log('Cant append to file')
            return reject(err.message)
        }
        resolve()
    }))
}

writeFileAsync(path.resolve(__dirname, 'text.txt'), 'write data to file')
    .then(() => console.log('Write data to file'))
    .then(() => appendFileAsync(path.resolve(__dirname, 'text.txt'), ' 1 append data to file'))
    .then(() => console.log('1 append data to file'))
    .then(() => appendFileAsync(path.resolve(__dirname, 'text.txt'), ' 2 append data to file'))
    .then(() => console.log('2 append data to file'))
    .then(() => appendFileAsync(path.resolve(__dirname, 'text.txt'), ' 3 append data to file'))
    .then(() => console.log('3 append data to file'))
    .then(() => readFileAsync(path.resolve(__dirname, 'text.txt')))
    .then(data => console.log(data))
    .then(() => removeFileAsync(path.resolve(__dirname, 'text.txt')))
    .then(() => console.log('Delete file'))
    .catch(err => console.log('cant write/append data to file', err.message))
