const os = require('os')
const cluster = require('cluster')


// console.log(os.platform())
// console.log(os.arch())
// console.log(os.cpus().length)

// const cpus = os.cpus()

if(cluster.isMaster){
    for(let i = 0; i < os.cpus().length; i++){
        // const cpuCore = cpus[i]
        // console.log(`Execute node process on cpu # ${cpus[i]}`)
        cluster.fork()
    }
    cluster.on('exit', (worker, code, signal)=>{
        console.log(`worker with pid: ${worker.process.pid} is dead`)
        if(code === 1){
            cluster.fork()
        }else{
            console.log('worker dead...')
        }
        cluster.fork()
    })
}else{
    console.log(`Worker with pid: ${process.pid}`)
    setInterval(()=>{
        console.log(`Worker with pid: ${process.pid} still work`)
    }, 5000)
}



