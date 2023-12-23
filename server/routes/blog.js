import express from 'express'
import { createBlog } from '../controllers/blog.js'

const router = express.Router()

router.post("/create-blog",createBlog)
export default router 