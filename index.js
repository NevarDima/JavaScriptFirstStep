const port = process.env.PORT || 8080
const Application = require('./framework/Application.js')
const userRouter = require('./src/user-router.js')
const postRouter = require('./src/post-router.js')
const jsonParser = require('./framework/parseJson.js')
const parseUrl = require('./framework/parseURL.js')
const mongoose = require('mongoose')
const app = new Application()

app.use(parseUrl('http:\localhost:8080'))
app.use(jsonParser)
app.addRouter(userRouter)
app.addRouter(postRouter)

const start = async() => {
    try{
        await mongoose.connect('mongodb+srv://js-user:123@cluster0.jtb6pdo.mongodb.net/?retryWrites=true&w=majority')
        app.listen(port, () => console.log(`server started on port: ${port}`))
    }catch (e){
        console.log(e)
    }
}

start()