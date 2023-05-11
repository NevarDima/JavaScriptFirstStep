// Readable - чтение
// Writable - Запись
// Duplex - Для чтения и записи Readable + Writable
// Transform - Такой же как Duplex, но может изменить данные по мере чтения

const fs = require('fs')
const path = require('path')

// fs.readFile(path.resolve(__dirname, 'resources', 'text.txt'), (err, data) => {
//     if(err){
//         throw err
//     }
//     console.log(data)
// })

//------------------------

// const stream = fs.createReadStream(path.resolve(__dirname, 'resources', 'text.txt'), {encoding: "utf-8"})
// stream.on('data', (chunk) =>{
//     console.log(chunk)
// })
// stream.on('end', ()=> 'End of reading')
// stream.on('error', (e)=> console.log(e))

//------------------------

const writableStream = fs.createWriteStream(path.resolve(__dirname, 'resources', 'writtenFile.txt'))

for (let i = 0; i < 20; i++) {
    writableStream.write(i + '\n')
}
writableStream.end()