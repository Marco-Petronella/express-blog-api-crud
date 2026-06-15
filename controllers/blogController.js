const posts = require('../data/posts')


//index
const index = (req,res) => {
    res.json(posts)
}

//show
const show = (req,res,next) => {
    const id = parseInt(req.params.id);
    const requestedPosts = posts.find((post) => post.id === id);
    if (!requestedPosts) {
        const err = new Error('Post not found');
        err.status = 404;
        return next(err);
    }
    res.json(requestedPosts)
}

//update
const update = (req,res,next) => {
    const id = parseInt(req.params.id);
    const thisPost = posts.find((post) => post.id === id);
    if (!thisPost) {
        const err = new Error('Post not found');
        err.status = 404;
        return next(err);
    }
    thisPost.title = req.body.title || thisPost.title
    thisPost.content = req.body.content || thisPost.content
    thisPost.image = req.body.image || thisPost.image
    thisPost.tags = req.body.tags || thisPost.tags
    res.json(thisPost)
}

//create
const create = (req,res,next) => {
        const id = posts[posts.length - 1].id + 1
        const newPost = { id, ...req.body }
        posts.push(newPost)
        console.log(posts[posts.length - 1])
        console.log("create")
        res.status(201).json(newPost) 
}

//destroy
const destroy = (req,res,next) => {
    const id = parseInt(req.params.id);
    const postIndex = posts.findIndex((post) => post.id === id)
    if (postIndex === -1) {
        const err = new Error('Post not found');
        err.status = 404;
        return next(err);
    }
    posts.splice(postIndex, 1)
    console.log(posts)
    res.sendStatus(204)
}

module.exports = {
    index,
    show,
    update,
    create,
    destroy
} 