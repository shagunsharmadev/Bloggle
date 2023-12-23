import express from 'express'
import { createBlog, getBlog } from '../controllers/blog.js'

const router = express.Router()

router.post("/create-blog",createBlog)
router.get("/blog/:id",getBlog)
export default router 