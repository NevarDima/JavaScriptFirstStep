const port = process.env.PORT || 8080
const Application = require('./framework/Application.js')
const router = require('./src/user-router.js')
const jsonParser = require('./framework/parseJson.js')
const app = new Application()

app.use(jsonParser)
app.addRouter(router)

app.listen(port, () => console.log(`server started on port: ${port}`))