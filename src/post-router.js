const Router = require('../framework/Router.js')
const controller = require('../src/post-controller.js')
const router = new Router()

router.get('/posts', controller.getPosts)

router.post('/posts', controller.createPost)

module.exports = router