const posts = require('../data/posts')


//index
const index = (req,res) => {
    res.json(posts)
}

//show
const show = (req,res) => {
    const id = parseInt(req.params.id);
    const requestedPosts = posts.find((post) => post.id === id);
    res.json(requestedPosts)
}

//update
const update = (req,res) => {
    console.log("update")
    res.send("update")
}

//create
const create = (req,res) => {
    console.log("create")
    res.send("create")
}

//destroy
const destroy = (req,res) => {
    const id = parseInt(req.params.id);
    const postIndex = posts.findIndex((post) => post.id === id)
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