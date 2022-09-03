const router = require("express").Router()
const Blog = require("../controllers/blog.controller")
const auth = require("../middleware/auth.middleware")
router.get("/", Blog.index)
router.post("/add", auth, Blog.create)
module.exports = router