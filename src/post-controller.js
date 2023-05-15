const Post = require('./post-model.js')

const getPosts = async (req,res) => {
    let posts
    if(req.params.id){
        posts = await Post.findById(req.params.id)
    }else{
        posts = await Post.find()
    }
    res.send(posts)
}

const createPost = async (req,res) => {
    const post = await Post.create(req.body)
    res.send(post)
}

module.exports = {
    getPosts,
    createPost
}