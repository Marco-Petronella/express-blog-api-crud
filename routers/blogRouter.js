const express = require('express')
const router = express.Router()

const blogController = require('../controllers/blogController')


//index
router.get("/", blogController.index);

//show
router.get("/:id", blogController.show);

//update
router.put("/:id", blogController.update);

//create
router.post("/", blogController.create);

//destroy
router.delete("/:id", blogController.destroy);

module.exports = router