const path = require('path')

console.log(path.join(__dirname, 'first', 'second'))
console.log(path.join(__dirname, '..'))
console.log(path.resolve('first', 'second'))

const fullpath = path.resolve('first', 'second', 'file.txt')
console.log('Parse fullpath', path.parse(fullpath))
console.log('OS separator: ', path.sep)
console.log('Check for absolute path(must be false): ', path.isAbsolute('first/second'))
console.log('Check for absolute path(must be true): ', path.isAbsolute(fullpath))
console.log('Return file name: ', path.basename(fullpath))
console.log('Return ext name: ', path.extname(fullpath))

//-------------------------------

const siteURL = 'http://localhost:8080/users?id=51'

const url = new URL(siteURL)
console.log(url)