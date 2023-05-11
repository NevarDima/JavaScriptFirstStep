const Router = require('../framework/Router.js')

const router = new Router()

const users = [
    {id: 1, name: 'Name1'},
    {id: 2, name: 'Name2'},
    {id: 3, name: 'Name3'}
]

const posts = [
    {id: 1, post: 'post1'},
    {id: 2, post: 'post2'},
    {id: 3, post: 'post3'}
]

router.get('/users', (req,res) => {
    res.send(users)
})

router.get('/posts', (req,res) => {
    res.send(posts)
})

router.post('/users', (req,res) => {
    const user = req.body
    users.push(user)
    res.send(users)
})

router.post('/posts', (req,res) => {
    const post = req.body
    posts.push(post)
    res.send(posts)
})

module.exports = router