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
    console.log("destroy")
    res.send("destroy")
}

module.exports = {
    index,
    show,
    update,
    create,
    destroy
}